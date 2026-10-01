"use client";
import { ArrowDown, BarChart3, ClipboardList, Lightbulb, MessagesSquare, UserRound } from "lucide-react";
const steps=[
 {n:"01",icon:ClipboardList,title:"Responda o questionário",text:"São 10 perguntas rápidas de múltipla escolha sobre como teu negócio atrai, converte, opera, mede e escala."},
 {n:"02",icon:UserRound,title:"Deixe teus dados",text:"Quando o mapa estiver pronto, pedimos nome, e-mail e telefone para identificar e liberar teu resultado."},
 {n:"03",icon:BarChart3,title:"Receba teu Snapshot",text:"Na hora, tu vê o radar dos 5 pilares, tuas notas e uma sugestão inicial de onde pode fazer sentido começar."},
 {n:"04",icon:MessagesSquare,title:"Aprofunde se quiser",text:"Se quiser ir além do mapa, tu pode marcar uma conversa gratuita comigo para colocar contexto nas notas e explorar possibilidades."},
];
export function SnapshotExplainerSection(){
 return <section className="relative overflow-hidden py-24 lg:py-32">
  <div className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_85%_20%,rgba(236,168,214,.06),transparent_30%)]"/>
  <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
   <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
    <div className="lg:col-span-5">
     <span className="inline-flex items-center gap-3 font-mono text-sm text-muted-foreground"><span className="h-px w-12 bg-foreground/30"/>O QUE É O SNAPSHOT?</span>
     <h2 className="mt-6 font-display text-5xl leading-[.95] tracking-tight md:text-6xl lg:text-7xl">Um raio-x rápido antes de qualquer conversa comercial.</h2>
     <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">O Snapshot é a porta de entrada do Studio Mendes. Tu responde algumas perguntas e recebe uma leitura inicial do teu negócio — sem precisar saber qual serviço procurar e sem falar com vendedor para ver o resultado.</p>
     <div className="mt-8 border-l border-[#eca8d6]/40 pl-5">
      <p className="text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground font-medium">Importante:</strong> o Snapshot não é uma auditoria completa nem uma proposta. Ele aponta sinais. A análise mais profunda acontece, se tu quiser, numa conversa gratuita com o Studio Mendes.</p>
     </div>
    </div>
    <div className="lg:col-span-7">
     <div className="grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
      {steps.map(s=><article key={s.n} className="group relative bg-background p-7 lg:p-9 min-h-[245px] transition-colors hover:bg-foreground/[.025]">
       <div className="flex justify-between"><s.icon className="w-5 h-5"/><span className="font-mono text-xs text-muted-foreground">{s.n}</span></div>
       <h3 className="mt-12 font-display text-3xl">{s.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
      </article>)}
     </div>
    </div>
   </div>
   <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between border-t border-foreground/10 pt-8">
    <div className="flex items-center gap-3 text-sm text-muted-foreground"><Lightbulb className="w-4 h-4 text-[#eca8d6]"/><span>Leva cerca de 3 minutos e o resultado aparece na hora.</span></div>
    <a href="#snapshot" className="inline-flex items-center gap-2 text-sm font-medium">Fazer meu Snapshot gratuito <ArrowDown className="w-4 h-4"/></a>
   </div>
  </div>
 </section>
}