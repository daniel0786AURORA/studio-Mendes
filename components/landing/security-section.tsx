"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    quote: "Invisto em anúncio mas não sei se dá retorno.",
    solution: "Estruturamos funil, métricas e leitura de resultado — pra cada real ter resposta.",
  },
  {
    quote: "Meu time perde tempo com tarefa repetitiva.",
    solution: "Automação e agentes de IA assumem o operacional e liberam o time pro que importa.",
  },
  {
    quote: "Recebo lead mas demoro pra responder.",
    solution: "Agente de IA 24/7 responde na hora, qualifica e agenda sozinho.",
  },
  {
    quote: "Meus dados estão espalhados e não confio neles.",
    solution: "Organizamos CRM e processos pra decidir com número, não com achismo.",
  },
  {
    quote: "Quero um sistema, mas nada pronto serve.",
    solution: "Criamos sistemas sob medida pensados na sua operação real.",
  },
  {
    quote: "Sei que preciso crescer, mas não sei por onde.",
    solution: "Diagnóstico e plano estratégico com prioridades claras e próximos passos.",
  },
  {
    quote: "Contrato vários fornecedores e ninguém conversa.",
    solution: "Uma equipe só cuidando de comunicação, tecnologia e negócio juntos.",
  },
  {
    quote: "Minha marca não passa o valor que eu entrego.",
    solution: "Posicionamento e comunicação alinhados ao que o negócio realmente vale.",
  },
  {
    quote: "Já usei robô de atendimento e foi frustrante — travado e sem contexto.",
    solution: "Nossos agentes são treinados com a voz do seu negócio, entendem contexto e executam tarefas de verdade — não respostas prontas.",
    wide: true,
  },
];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ajuda" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            05 · Como podemos ajudar
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Se você já disse
            <br />
            <span className="text-muted-foreground">alguma dessas frases…</span>
          </h2>

          <p className={`text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            …provavelmente a gente consegue ajudar. Reconheceu o seu cenário em uma delas? Esse é exatamente o tipo de problema que resolvemos.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={card.quote}
              className={`p-8 border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/30 transition-all duration-500 group ${
                card.wide ? "md:col-span-2 border-[#eca8d6]/30 bg-[#eca8d6]/[0.04]" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <p className="text-xl font-display text-foreground mb-4 leading-snug">
                &ldquo;{card.quote}&rdquo;
              </p>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                <p className="text-muted-foreground leading-relaxed">{card.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
