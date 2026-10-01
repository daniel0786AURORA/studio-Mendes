import { NextResponse } from "next/server";
import crypto from "crypto";
const DB="https://rpfmhjkhkyshbozjepwb.supabase.co";
function safeEqual(a:string,b:string){try{return crypto.timingSafeEqual(Buffer.from(a),Buffer.from(b))}catch{return false}}
function verify(raw:string,header:string,secret:string){
 const parts=Object.fromEntries(header.split(",").map(x=>x.split("="))); const ts=parts.t, sig=parts.v1;
 if(!ts||!sig)return false; const expected=crypto.createHmac("sha256",secret).update(`${ts}.${raw}`).digest("hex"); return safeEqual(expected,sig);
}
export async function POST(req:Request){
 const raw=await req.text(); const secret=process.env.CALENDLY_WEBHOOK_SIGNING_KEY; const signature=req.headers.get("calendly-webhook-signature")||"";
 if(!secret||!verify(raw,signature,secret))return NextResponse.json({error:"Unauthorized"},{status:401});
 try{
  const body=JSON.parse(raw); if(body.event!=="invitee.created")return NextResponse.json({ok:true});
  const p=body.payload||{}, tracking=p.tracking||{}; const leadId=tracking.utm_content||null; const email=p.email||null;
  const key=process.env.SUPABASE_SERVICE_ROLE_KEY; if(!key)throw new Error("DB not configured");
  const h={apikey:key,Authorization:`Bearer ${key}`,"Content-Type":"application/json",Prefer:"return=representation"};
  let filter=leadId?`id=eq.${encodeURIComponent(leadId)}`:`email=eq.${encodeURIComponent(email||"")}`;
  const get=await fetch(`${DB}/rest/v1/leads?${filter}&select=*`,{headers:h}); const leads=await get.json(); const lead=leads?.[0];
  if(!lead)return NextResponse.json({ok:true,matched:false});
  const eventUri=p.event||""; let start=null,end=null;
  if(eventUri){const token=process.env.CALENDLY_API_TOKEN;if(token){const ev=await fetch(eventUri,{headers:{Authorization:`Bearer ${token}`}});if(ev.ok){const j=await ev.json();start=j.resource?.start_time||null;end=j.resource?.end_time||null}}}
  await fetch(`${DB}/rest/v1/leads?id=eq.${lead.id}`,{method:"PATCH",headers:h,body:JSON.stringify({status:"meeting_booked",meeting_booked_at:new Date().toISOString(),meeting_event_uri:eventUri,meeting_invitee_uri:p.uri||null,meeting_start_at:start,meeting_end_at:end})});
  // Notification provider is intentionally isolated here; once WhatsApp credentials are configured this webhook has the complete lead + Snapshot context.
  console.log("MEETING_BOOKED",JSON.stringify({leadId:lead.id,name:lead.name,phone:lead.phone,email:lead.email,scores:lead.snapshot_scores,bottleneck:lead.snapshot_bottleneck,suggestion:lead.snapshot_suggestion,answers:lead.snapshot_answers,start,end}));
  return NextResponse.json({ok:true,matched:true});
 }catch(e){console.error("calendly webhook",e);return NextResponse.json({error:"Webhook failed"},{status:500})}
}