import { NextResponse } from "next/server";
const URL="https://rpfmhjkhkyshbozjepwb.supabase.co";
export async function POST(req:Request){
 try{
  const body=await req.json(); const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!key)return NextResponse.json({error:"Server not configured"},{status:500});
  const {name,email,phone,answers,scores,bottleneck,suggestion}=body;
  if(!name||!email||!phone)return NextResponse.json({error:"Missing fields"},{status:400});
  const headers={apikey:key,Authorization:`Bearer ${key}`,"Content-Type":"application/json",Prefer:"return=representation"};
  const res=await fetch(`${URL}/rest/v1/leads`,{method:"POST",headers,body:JSON.stringify({name,email,phone,source:"website_snapshot",status:"snapshot_completed",consent_contact:true,snapshot_answers:answers,snapshot_scores:scores,snapshot_bottleneck:bottleneck,snapshot_suggestion:suggestion,snapshot_completed_at:new Date().toISOString()})});
  if(!res.ok)throw new Error(await res.text()); const data=await res.json();
  return NextResponse.json({ok:true,id:data?.[0]?.id});
 }catch(e){console.error("snapshot capture",e);return NextResponse.json({error:"Could not save lead"},{status:500})}
}