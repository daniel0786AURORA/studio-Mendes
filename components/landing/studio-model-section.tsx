"use client";
import { Megaphone, MousePointerClick, Cpu, Gauge, TrendingUp, ArrowUpRight } from "lucide-react";

const pillars=[
 {n:"01",icon:Megaphone,name:"Atrair",text:"Fazer as pessoas certas encontrarem e perceberem valor no teu negócio."},
 {n:"02",icon:MousePointerClick,name:"Converter",text:"Transformar atenção e oportunidade em conversa, proposta e venda."},
 {n:"03",icon:Cpu,name:"Operar",text:"Eliminar atrito, trabalho manual e processos que não acompanham o crescimento."},
 {n:"04",icon:Gauge,name:"Medir",text:"Conectar dados e indicadores para parar de decidir no escuro."},
 {n:"05",icon:TrendingUp,name:"Escalar",text:"Encontrar o que funciona, fortalecer a estrutura e crescer com controle."},
];
export function StudioModelSection(){
 return <section id="metodo" className="relative py-24 lg:py-32 overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
   <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
    <div className="lg:col-span-7">
     <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6"><span className="w-12 h-px bg-foreground/30"/>O MODELO STUDIO MENDES</span>
     <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[.95]">Não vendemos departamentos.<br/><span className="text-muted-foreground">Resolvemos gargalos.</span></h2>
    </div>
    <div className="lg:col-span-5 lg:self-end">
     <p className="text-xl text-muted-foreground leading-relaxed">Marketing, tecnologia e negócios são ferramentas. O ponto de partida é descobrir o que está impedindo tua empresa de avançar e montar a combinação certa para resolver isso.</p>
    </div>
   </div>
   <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
    {pillars.map((p)=><article key={p.name} className="group relative min-h-[300px] border border-foreground/10 bg-foreground/[.02] p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-foreground/35">
     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(circle_at_50%_0%,rgba(236,168,214,.10),transparent_55%)]"/>
     <div className="relative"><div className="flex justify-between items-center mb-16"><p.icon className="w-5 h-5"/><span className="font-mono text-xs text-muted-foreground">{p.n}</span></div><h3 className="text-3xl font-display mb-4">{p.name}</h3><p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p></div>
    </article>)}
   </div>
   <div className="mt-12 flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center border-t border-foreground/10 pt-10">
    <p className="text-2xl lg:text-3xl font-display max-w-3xl">O cliente não compra “tráfego”, “site” ou “automação”. <span className="text-muted-foreground">Compra a resolução do problema que está travando o próximo passo.</span></p>
    <a href="#scan" className="inline-flex items-center gap-2 shrink-0 text-sm font-medium">Descobrir meus gargalos <ArrowUpRight className="w-4 h-4"/></a>
   </div>
  </div>
 </section>
}