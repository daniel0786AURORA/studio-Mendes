"use client";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, Check, LockKeyhole } from "lucide-react";
const CALENDLY="https://calendly.com/danielsm0786/30min";
const pillars=["Atrair","Converter","Operar","Medir","Escalar"] as const;
const questions=[
 {p:"Atrair",q:"Hoje, como novos clientes costumam encontrar tua empresa?",a:[{l:"Quase só indicação",s:3},{l:"Temos canais, mas sem constância",s:5},{l:"Temos aquisição previsível",s:9},{l:"Não sei dizer",s:1}]},
 {p:"Atrair",q:"Tua comunicação deixa claro por que alguém deveria escolher tua empresa?",a:[{l:"Pouco ou nada",s:2},{l:"Mais ou menos",s:5},{l:"Sim, com clareza",s:9},{l:"Nunca avaliamos",s:1}]},
 {p:"Converter",q:"O que acontece quando chega uma oportunidade comercial?",a:[{l:"Depende de quem atende",s:3},{l:"Temos um processo básico",s:6},{l:"Temos processo e acompanhamento",s:9},{l:"Muitas se perdem",s:1}]},
 {p:"Converter",q:"Tu sabe onde mais perde vendas hoje?",a:[{l:"Não",s:2},{l:"Tenho uma suspeita",s:5},{l:"Sim e acompanhamos",s:9},{l:"Nem medimos isso",s:1}]},
 {p:"Operar",q:"Quanto da operação depende de tarefas manuais, planilhas ou WhatsApp?",a:[{l:"Quase tudo",s:2},{l:"Uma parte relevante",s:5},{l:"Pouco",s:9},{l:"Não sei",s:1}]},
 {p:"Operar",q:"Se as vendas dobrassem amanhã, tua operação acompanharia?",a:[{l:"Provavelmente não",s:2},{l:"Com dificuldade",s:5},{l:"Sim",s:9},{l:"Não faço ideia",s:1}]},
 {p:"Medir",q:"Tu consegue dizer quais ações realmente trazem retorno?",a:[{l:"Não",s:2},{l:"Parcialmente",s:5},{l:"Sim",s:9},{l:"Olhamos métricas soltas",s:3}]},
 {p:"Medir",q:"As decisões importantes usam dados confiáveis?",a:[{l:"Raramente",s:2},{l:"Às vezes",s:5},{l:"Quase sempre",s:9},{l:"Não temos dados organizados",s:1}]},
 {p:"Escalar",q:"Existe clareza sobre o próximo gargalo que precisa ser resolvido?",a:[{l:"Não",s:2},{l:"Temos hipóteses",s:5},{l:"Sim",s:9},{l:"Temos vários e não priorizamos",s:3}]},
 {p:"Escalar",q:"O crescimento hoje é repetível ou depende muito de esforço pontual?",a:[{l:"Muito pontual",s:2},{l:"Um pouco dos dois",s:5},{l:"Bem repetível",s:9},{l:"Não sei",s:1}]},
] as const;
function Radar({scores}:{scores:Record<string,number>}){
 const pts=pillars.map((p,i)=>{const a=-Math.PI/2+i*Math.PI*2/5,r=scores[p]*11.5;return [150+Math.cos(a)*r,150+Math.sin(a)*r]});
 return <svg viewBox="0 0 300 315" className="w-full max-w-[390px] mx-auto overflow-visible">
  {[1,.75,.5,.25].map((s,j)=><polygon key={s} points={pillars.map((_,i)=>{const a=-Math.PI/2+i*Math.PI*2/5,r=115*s;return `${150+Math.cos(a)*r},${150+Math.sin(a)*r}`}).join(" ")} fill="none" stroke="currentColor" opacity={.07+j*.02}/>)}
  {pillars.map((_,i)=>{const a=-Math.PI/2+i*Math.PI*2/5;return <line key={i} x1="150" y1="150" x2={150+Math.cos(a)*115} y2={150+Math.sin(a)*115} stroke="currentColor" opacity=".1"/>})}
  <polygon points={pts.map(p=>p.join(",")).join(" ")} fill="rgba(236,168,214,.16)" stroke="#eca8d6" strokeWidth="2"/>
  {pillars.map((p,i)=>{const a=-Math.PI/2+i*Math.PI*2/5,r=139;return <text key={p} x={150+Math.cos(a)*r} y={154+Math.sin(a)*r} textAnchor="middle" fontSize="10" fill="currentColor" opacity=".65">{p}</text>})}
 </svg>
}
export function SnapshotSection(){
 const [step,setStep]=useState<"intro"|"quiz"|"lead"|"result">("intro"); const [idx,setIdx]=useState(0); const [answers,setAnswers]=useState<number[]>([]);
 const [lead,setLead]=useState({name:"",email:"",phone:""}); const [leadId,setLeadId]=useState(""); const [saving,setSaving]=useState(false); const [saveError,setSaveError]=useState("");
 const scores=useMemo(()=>{const out:Record<string,number>={};pillars.forEach(p=>{const vals=questions.map((q,i)=>q.p===p?q.a[answers[i]??0].s:null).filter(v=>v!==null) as number[];out[p]=Math.round((vals.reduce((a,b)=>a+b,0)/Math.max(vals.length,1))*10)/10});return out},[answers]);
 const minScore=Math.min(...pillars.map(p=>scores[p]));
 const attentionPillars=pillars.filter(p=>scores[p]===minScore);
 const weakest=attentionPillars[0];
 const attentionLabel=attentionPillars.join(" + ");
 const suggestion:Record<string,string>={Atrair:"Revisar posicionamento e aquisição antes de aumentar investimento.",Converter:"Estruturar melhor a passagem de oportunidade para venda.",Operar:"Reduzir dependência manual e organizar processos críticos.",Medir:"Conectar indicadores para decidir com mais segurança.",Escalar:"Definir prioridades e criar uma estrutura de crescimento repetível."};
 const nextStep=attentionPillars.length===1?suggestion[weakest]:"Há mais de um pilar pedindo atenção no mesmo nível. Antes de escolher uma frente, vale aprofundar o contexto para identificar qual deles está limitando o negócio primeiro.";
 function answer(v:number){const n=[...answers];n[idx]=v;setAnswers(n);if(idx<questions.length-1)setIdx(idx+1);else setStep("lead")}
 return <section id="snapshot" className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
  <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_20%_40%,rgba(236,168,214,.08),transparent_32%)]"/>
  <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
   <div className="grid lg:grid-cols-12 gap-12 items-start">
    <div className="lg:col-span-4 lg:sticky lg:top-28">
     <span className="inline-flex items-center gap-3 font-mono text-xs text-white/45"><span className="h-px w-10 bg-white/25"/>SNAPSHOT STUDIO MENDES</span>
     <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[.95]">Descubra onde teu negócio <span className="text-white/35">pede atenção primeiro.</span></h2>
     <p className="mt-7 text-white/55 leading-relaxed">Responda algumas perguntas rápidas. No final, teu mapa dos 5 pilares é gerado na hora, junto com uma sugestão inicial de por onde começar.</p>
     <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/40 font-mono"><span>10 PERGUNTAS</span><span>~3 MIN</span><span>GRATUITO</span></div>
    </div>
    <div className="lg:col-span-8 border border-white/10 bg-white/[.025] min-h-[570px]">
     {step==="intro"&&<div className="p-8 sm:p-12 lg:p-16 flex min-h-[570px] flex-col justify-between">
      <div><p className="font-mono text-xs text-[#eca8d6]">ANTES DA CONVERSA</p><h3 className="mt-4 font-display text-4xl sm:text-5xl">Primeiro, um raio-x rápido.</h3><p className="mt-5 max-w-2xl text-lg text-white/55">O Snapshot não substitui um diagnóstico aprofundado. Ele organiza os primeiros sinais para tu entender onde estão forças e possíveis gargalos.</p></div>
      <div className="grid sm:grid-cols-3 gap-3 my-10">{["Responda","Deixe seus dados","Receba o mapa"].map((x,i)=><div key={x} className="border-t border-white/15 pt-4"><span className="font-mono text-xs text-white/30">0{i+1}</span><p className="mt-2">{x}</p></div>)}</div>
      <button onClick={()=>setStep("quiz")} className="self-start inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-black font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(236,168,214,.2)]">Começar meu Snapshot <ArrowRight className="w-4 h-4"/></button>
     </div>}
     {step==="quiz"&&<div className="p-8 sm:p-12 lg:p-16">
      <div className="flex items-center justify-between text-xs font-mono text-white/35"><span>{questions[idx].p.toUpperCase()}</span><span>{idx+1} / {questions.length}</span></div>
      <div className="mt-4 h-px bg-white/10"><div className="h-px bg-[#eca8d6] transition-all duration-500" style={{width:`${((idx+1)/questions.length)*100}%`}}/></div>
      <h3 className="mt-14 max-w-3xl font-display text-4xl sm:text-5xl leading-tight">{questions[idx].q}</h3>
      <div className="mt-10 grid gap-3">{questions[idx].a.map((a,i)=><button key={a.l} onClick={()=>answer(i)} className="group flex items-center justify-between border border-white/10 bg-white/[.02] p-5 text-left transition-all hover:border-[#eca8d6]/60 hover:bg-[#eca8d6]/[.05]"><span>{a.l}</span><ArrowRight className="w-4 h-4 opacity-30 group-hover:opacity-100"/></button>)}</div>
      {idx>0&&<button onClick={()=>setIdx(idx-1)} className="mt-8 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft className="w-4 h-4"/>Voltar</button>}
     </div>}
     {step==="lead"&&<form onSubmit={async e=>{e.preventDefault();setSaving(true);setSaveError("");try{const res=await fetch("/api/snapshot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lead,...lead,answers:questions.map((q,i)=>({pillar:q.p,question:q.q,answer:q.a[answers[i]].l})),scores,bottleneck:attentionLabel,suggestion:nextStep})});if(!res.ok)throw new Error();const saved=await res.json();setLeadId(saved.id||"");setStep("result")}catch{setSaveError("Não conseguimos salvar teu Snapshot agora. Tenta novamente em instantes.")}finally{setSaving(false)}}} className="p-8 sm:p-12 lg:p-16">
      <LockKeyhole className="w-5 h-5 text-[#eca8d6]"/><p className="mt-5 font-mono text-xs text-[#eca8d6]">TEU MAPA ESTÁ PRONTO</p><h3 className="mt-3 font-display text-4xl sm:text-5xl">Para liberar o resultado, falta só isso.</h3><p className="mt-5 text-white/50 max-w-xl">Deixe teus dados para identificar teu Snapshot e liberar as notas, radar e sugestão inicial.</p>
      <div className="mt-10 grid gap-4 max-w-xl">{[["name","Nome"],["email","E-mail"],["phone","WhatsApp / telefone"]].map(([k,l])=><label key={k} className="grid gap-2 text-xs font-mono text-white/40">{l.toUpperCase()}<input required type={k==="email"?"email":"text"} value={lead[k as keyof typeof lead]} onChange={e=>setLead({...lead,[k]:e.target.value})} className="h-14 border border-white/15 bg-white/[.03] px-4 text-base font-sans text-white outline-none focus:border-[#eca8d6]/70"/></label>)}</div>
      <button disabled={saving} className="mt-7 inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-black font-medium disabled:opacity-50">{saving?"Gerando teu mapa...":"Ver meu resultado"} <ArrowRight className="w-4 h-4"/></button>{saveError&&<p className="mt-4 text-sm text-red-300">{saveError}</p>}<p className="mt-4 text-[11px] text-white/30">Ao liberar o resultado, tu concorda que o Studio Mendes use esses dados para entregar teu Snapshot e entrar em contato sobre o diagnóstico. Sem spam.</p>
     </form>}
     {step==="result"&&<div className="p-8 sm:p-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"><div><p className="font-mono text-xs text-[#eca8d6]">SNAPSHOT DE {lead.name.toUpperCase()}</p><h3 className="mt-3 font-display text-4xl">Teu mapa inicial</h3></div><span className="text-xs font-mono text-white/35">5 PILARES · 0–10</span></div>
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center"><div><Radar scores={scores}/><div className="grid grid-cols-5 gap-1">{pillars.map(p=><div key={p} className="text-center"><strong className="font-display text-xl">{scores[p].toFixed(1)}</strong><span className="block mt-1 text-[8px] font-mono text-white/35">{p.toUpperCase()}</span></div>)}</div></div>
       <div><p className="text-sm text-white/40">SINAL MAIS FORTE DE ATENÇÃO</p><h4 className="mt-2 font-display text-4xl">{attentionLabel}</h4><div className="mt-5 border border-[#eca8d6]/25 bg-[#eca8d6]/[.05] p-5"><p className="text-xs font-mono text-[#eca8d6]">SUGESTÃO DE PRÓXIMO PASSO</p><p className="mt-3 leading-relaxed text-white/75">{nextStep}</p></div><p className="mt-6 text-sm leading-relaxed text-white/45">Este é um diagnóstico inicial baseado nas tuas respostas. Contexto, dados, oferta, processo comercial e operação podem mudar bastante a leitura.</p></div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-8 flex flex-col lg:flex-row gap-7 lg:items-center lg:justify-between"><div className="max-w-xl"><h4 className="font-display text-3xl">Quer aprofundar esse mapa?</h4><p className="mt-2 text-sm leading-relaxed text-white/50">Na conversa gratuita, analisamos teu Snapshot com mais contexto, exploramos gargalos, ideias e oportunidades. Se fizer sentido trabalhar juntos, depois disso o Studio Mendes monta uma proposta personalizada.</p></div><a href={`${CALENDLY}?name=${encodeURIComponent(lead.name)}&email=${encodeURIComponent(lead.email)}&a1=${encodeURIComponent(lead.phone)}&utm_source=studio_mendes_snapshot&utm_content=${encodeURIComponent(leadId)}`} target="_blank" rel="noreferrer" className="shrink-0 inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-black font-medium"><Calendar className="w-4 h-4"/>Agendar conversa gratuita</a></div>
     </div>}
    </div>
   </div>
  </div>
 </section>
}