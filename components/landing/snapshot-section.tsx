"use client";
import { useEffect, useRef, useState } from "react";
import { Calendar, Check, ArrowRight } from "lucide-react";
const CALENDLY="https://calendly.com/danielsm0786/30min?month=2026-09";
const axes=[["Atrair",78],["Converter",55],["Operar",42],["Medir",31],["Escalar",48]];
export function SnapshotSection(){
 const ref=useRef<HTMLElement>(null); const [on,setOn]=useState(false);
 useEffect(()=>{const o=new IntersectionObserver(([e])=>e.isIntersecting&&setOn(true),{threshold:.2});if(ref.current)o.observe(ref.current);return()=>o.disconnect()},[]);
 const pts=axes.map(([,v],i)=>{const a=-Math.PI/2+i*Math.PI*2/5,r=Number(v)*1.15;return [150+Math.cos(a)*r,150+Math.sin(a)*r]});
 return <section ref={ref} id="snapshot" className="relative py-24 lg:py-32 overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14 items-center">
   <div className="lg:col-span-6">
    <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6"><span className="w-12 h-px bg-foreground/30"/>SNAPSHOT · O PRIMEIRO PASSO</span>
    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[.95] tracking-tight">Uma conversa gratuita.<br/><span className="text-muted-foreground">Uma primeira visão do teu negócio.</span></h2>
    <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">Em 25–30 minutos, a gente conversa sobre teu momento, objetivos e principais dificuldades. Não é reunião de venda disfarçada: é uma pré-análise para entender onde pode existir oportunidade.</p>
    <div className="mt-9 grid sm:grid-cols-2 gap-4">
     {["Leitura inicial dos 5 pilares","Principais sinais de gargalo","Uma visão visual para facilitar a conversa","Próximos passos que fazem sentido"].map(x=><div key={x} className="flex gap-3 items-start border-t border-foreground/10 pt-4"><Check className="w-4 h-4 mt-1 shrink-0"/><span className="text-sm">{x}</span></div>)}
    </div>
    <div className="mt-10 p-6 border border-[#eca8d6]/25 bg-[#eca8d6]/[.04]">
     <p className="leading-relaxed"><strong>Depois, tu decide.</strong> Se gostar da conversa, das possibilidades e quiser avançar, aprofundamos o diagnóstico e podemos montar um orçamento personalizado. Se não fizer sentido, não existe obrigação nenhuma.</p>
    </div>
    <a href={CALENDLY} target="_blank" rel="noreferrer" className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-foreground text-background px-7 font-medium transition-all hover:-translate-y-0.5 hover:opacity-90"><Calendar className="w-4 h-4"/>Agendar Snapshot gratuito<ArrowRight className="w-4 h-4"/></a>
   </div>
   <div className="lg:col-span-6">
    <div className="relative border border-foreground/10 bg-foreground/[.02] p-6 sm:p-10">
     <div className="flex justify-between mb-6"><div><p className="font-mono text-xs text-muted-foreground">EXEMPLO DE VISÃO</p><h3 className="text-2xl font-display mt-2">Mapa inicial do negócio</h3></div><span className="font-mono text-xs text-muted-foreground">5 PILARES</span></div>
     <svg viewBox="0 0 300 330" className="w-full max-w-[430px] mx-auto overflow-visible">
      {[1,.75,.5,.25].map((s,j)=><polygon key={s} points={Array.from({length:5},(_,i)=>{const a=-Math.PI/2+i*Math.PI*2/5,r=115*s;return (150+Math.cos(a)*r)+","+(150+Math.sin(a)*r)}).join(" ")} fill="none" stroke="currentColor" opacity={.08+j*.02}/>)}
      {Array.from({length:5},(_,i)=>{const a=-Math.PI/2+i*Math.PI*2/5;return <line key={i} x1="150" y1="150" x2={150+Math.cos(a)*115} y2={150+Math.sin(a)*115} stroke="currentColor" opacity=".1"/>})}
      <polygon points={pts.map(p=>p.join(",")).join(" ")} fill="rgba(236,168,214,.14)" stroke="#eca8d6" strokeWidth="2" style={{transformOrigin:"150px 150px",transform:on?"scale(1)":"scale(.05)",opacity:on?1:0,transition:"all 1.2s cubic-bezier(.2,.8,.2,1)"}}/>
      {axes.map(([name],i)=>{const a=-Math.PI/2+i*Math.PI*2/5,r=140;return <text key={name} x={150+Math.cos(a)*r} y={155+Math.sin(a)*r} textAnchor="middle" fontSize="10" fill="currentColor" opacity=".65">{name}</text>})}
     </svg>
     <div className="grid grid-cols-5 gap-2 mt-2">{axes.map(([n,v])=><div key={n} className="text-center"><strong className="font-display text-xl">{v}</strong><span className="block text-[9px] font-mono text-muted-foreground mt-1">{n.toUpperCase()}</span></div>)}</div>
     <p className="mt-7 pt-6 border-t border-foreground/10 text-xs text-muted-foreground leading-relaxed">Ilustração do tipo de leitura que usamos para tornar os gargalos visíveis. O diagnóstico real depende da conversa e dos dados disponíveis.</p>
    </div>
   </div>
  </div>
 </section>
}