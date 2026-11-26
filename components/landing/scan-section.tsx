"use client";
import { ArrowRight, Radar, Route, Zap, Target } from "lucide-react";
export function ScanSection(){
 return <section id="scan" className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
  <div className="absolute inset-0 [background:radial-gradient(circle_at_80%_50%,rgba(103,232,249,.08),transparent_35%)]"/>
  <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14 items-center">
   <div className="lg:col-span-6">
    <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-6"><span className="w-12 h-px bg-white/20"/>O MAPA</span>
    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[.95]">A gente mapeia,<br/><span className="text-white/35">e dá uma nota.</span></h2>
    <p className="mt-8 text-xl text-white/60 leading-relaxed max-w-xl">Um raio-x do teu negócio inteiro, com uma nota pra cada área. O objetivo não é empurrar serviço: é transformar sintomas soltos em prioridades claras — e mostrar onde atacar primeiro.</p>
    <a href="#proximo-passo" className="mt-10 inline-flex items-center gap-3 rounded-full bg-white text-black px-7 h-14 font-medium hover:bg-white/90 transition-colors">Agendar conversa grátis <ArrowRight className="w-4 h-4"/></a>
   </div>
   <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
    {[["Nota de saúde /100",Radar,"A foto honesta de onde teu negócio está — uma nota pra cada área, do verde ao vermelho."],["Gargalos",Target,"Onde está o maior atrito e o que merece prioridade agora."],["Quick wins",Zap,"Ajustes que podem gerar impacto sem depender de um projeto gigante."],["Plano de ação",Route,"O que a gente ataca, em que ordem — sem tentar fazer tudo ao mesmo tempo."]].map(([t,I,d])=>{const Icon=I as typeof Radar;return <div key={t as string} className="border border-white/10 bg-white/[.025] p-7 min-h-[220px] hover:border-white/30 transition-colors"><Icon className="w-5 h-5 mb-12 text-[#eca8d6]"/><h3 className="text-2xl font-display mb-3">{t as string}</h3><p className="text-sm text-white/50 leading-relaxed">{d as string}</p></div>})}
   </div>
  </div>
 </section>
}