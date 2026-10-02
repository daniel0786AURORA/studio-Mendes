import { NextResponse } from "next/server";
const URL="https://rpfmhjkhkyshbozjepwb.supabase.co";
const NOTIFY_EMAIL="danielsm0786@gmail.com";

function esc(v:unknown){
 return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));
}
async function notifySnapshot(lead:any){
 const key=process.env.RESEND_API_KEY;
 if(!key)return;
 const scores=lead.scores||{};
 const scoreRows=Object.entries(scores).map(([p,v])=>`<tr><td style="padding:6px 12px 6px 0"><b>${esc(p)}</b></td><td>${esc(v)}/10</td></tr>`).join("");
 const answers=Array.isArray(lead.answers)?lead.answers.map((a:any,i:number)=>`<li style="margin:0 0 10px"><b>${i+1}. ${esc(a.question)}</b><br/>${esc(a.answer)}</li>`).join(""):"";
 const phone=String(lead.phone||"").replace(/\D/g,"");
 const html=`<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#171717">
  <p style="font-size:12px;letter-spacing:1px;color:#777">STUDIO MENDES · NOVO SNAPSHOT</p>
  <h1 style="font-size:28px;margin:8px 0 20px">🔥 Novo lead: ${esc(lead.name)}</h1>
  <p><b>WhatsApp:</b> ${esc(lead.phone)}<br/><b>E-mail:</b> ${esc(lead.email)}</p>
  <p><a href="https://wa.me/${phone}" style="display:inline-block;padding:12px 18px;background:#111;color:#fff;text-decoration:none;border-radius:999px">Chamar lead no WhatsApp</a></p>
  <h2 style="margin-top:28px">Snapshot</h2><table>${scoreRows}</table>
  <p><b>Atenção principal:</b> ${esc(lead.bottleneck)}</p>
  <p><b>Sugestão inicial:</b> ${esc(lead.suggestion)}</p>
  <h2 style="margin-top:28px">Respostas</h2><ol style="padding-left:22px">${answers}</ol>
 </div>`;
 const res=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.SNAPSHOT_EMAIL_FROM||"Studio Mendes <onboarding@resend.dev>",to:[process.env.SNAPSHOT_NOTIFY_EMAIL||NOTIFY_EMAIL],subject:`🔥 Novo Snapshot — ${lead.name}`,html})});
 if(!res.ok)console.error("snapshot notification failed",res.status);
}
export async function POST(req:Request){
 try{
  const body=await req.json(); const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!key)return NextResponse.json({error:"Server not configured"},{status:500});
  const {name,email,phone,answers,scores,bottleneck,suggestion}=body;
  if(!name||!email||!phone)return NextResponse.json({error:"Missing fields"},{status:400});
  const headers={apikey:key,Authorization:`Bearer ${key}`,"Content-Type":"application/json",Prefer:"return=representation"};
  const res=await fetch(`${URL}/rest/v1/leads`,{method:"POST",headers,body:JSON.stringify({name,email,phone,source:"website_snapshot",status:"snapshot_completed",consent_contact:true,snapshot_answers:answers,snapshot_scores:scores,snapshot_bottleneck:bottleneck,snapshot_suggestion:suggestion,snapshot_completed_at:new Date().toISOString()})});
  if(!res.ok)throw new Error(await res.text()); const data=await res.json();
  await notifySnapshot({name,email,phone,answers,scores,bottleneck,suggestion});
  return NextResponse.json({ok:true,id:data?.[0]?.id});
 }catch(e){console.error("snapshot capture",e);return NextResponse.json({error:"Could not save lead"},{status:500})}
}