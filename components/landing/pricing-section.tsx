"use client";

import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const stages = [
  {
    name: "Primeiros passos",
    description: "Pra quem está começando e precisa de direção antes de gastar energia à toa.",
    features: [
      "Diagnóstico do momento atual",
      "Plano estratégico com prioridades",
      "Primeira estrutura de comunicação",
    ],
    highlight: false,
  },
  {
    name: "Ganhando ritmo",
    description: "Pra quem já vende, mas quer previsibilidade e parar de depender do improviso.",
    features: [
      "Tráfego pago com funil estruturado",
      "Automação e agentes de IA",
      "CRM e processos organizados",
    ],
    highlight: true,
  },
  {
    name: "Operando em escala",
    description: "Pra quem já opera e precisa de sistema, dado e tecnologia sob medida pra crescer.",
    features: [
      "Sistemas sob medida",
      "Agentes de IA avançados",
      "Leitura de indicadores e evolução contínua",
    ],
    highlight: false,
  },
];

export function PricingSection() {
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
    <section id="pra-quem-e" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-12 h-px bg-foreground/30" />
              07 · Pra quem é
            </span>
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              De quem está começando
              <br />
              <span className="text-stroke">a quem já opera em escala.</span>
            </h2>
            <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
              Não importa o tamanho do negócio — importa o momento. A gente ajusta a atuação pro estágio em que você está agora.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative p-0 h-72 lg:h-auto">
            <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
              <img
                src="/images/whale.png"
                alt="Baleia orgânica"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Stage cards */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-0">
            {stages.map((stage, index) => (
              <div
                key={stage.name}
                className={`relative bg-background border transition-all duration-700 ${
                  stage.highlight 
                    ? "border-foreground lg:-mx-2 lg:z-10 lg:scale-105" 
                    : "border-foreground/10 lg:first:-mr-2 lg:last:-ml-2"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {stage.highlight && (
                  <div className="absolute -top-4 left-8 right-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
                      Momento mais comum
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  <div className="mb-8 pb-8 border-b border-foreground/10">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-display mt-2">{stage.name}</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{stage.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {stage.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className={`mt-16 pt-12 border-t border-foreground/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Não sabe em qual estágio você está? Tudo bem — é justamente isso que a pré-análise gratuita esclarece.
          </p>
          <a href="#como-funciona" className="text-sm underline underline-offset-4 hover:text-foreground transition-colors whitespace-nowrap">
            Ver como funciona
          </a>
        </div>
      </div>

      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1.5px currentColor;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
