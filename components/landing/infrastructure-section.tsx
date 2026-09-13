"use client";

import { useEffect, useState, useRef } from "react";
import { Megaphone, Code2, TrendingUp, Check } from "lucide-react";

const frentes = [
  {
    icon: Megaphone,
    title: "Comunicação",
    description: "Fazer o mercado enxergar — e querer — o seu negócio.",
    items: ["Tráfego pago com estratégia", "Email marketing", "Posicionamento de marca"],
  },
  {
    icon: Code2,
    title: "Tecnologia",
    description: "Fazer a operação rodar sem depender de você o tempo todo.",
    items: ["Criação de sistemas sob medida", "Agentes de IA personalizados", "Segurança básica cybernética"],
  },
  {
    icon: TrendingUp,
    title: "Negócios",
    description: "Fazer as decisões certas, na ordem certa.",
    items: ["Diagnóstico & Plano Estratégico", "Análise de funil e estratégia", "Processos + automação"],
  },
];

export function InfrastructureSection() {
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
    <section id="servicos" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            02 · O que somos
          </span>
          
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center">
            {/* Globe image */}
            <div className={`w-48 lg:w-72 xl:w-80 shrink-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
                alt="Esfera de rede global"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Title + description */}
            <div className="flex flex-col justify-center">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                Um estúdio. Três frentes.
                <br />
                <span className="text-muted-foreground">Um único objetivo.</span>
              </h2>

              <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
                Não somos uma agência de tráfego, nem uma consultoria genérica. Somos um estúdio que reúne comunicação, tecnologia e visão de negócio pra resolver o que realmente trava o crescimento — com uma única equipe pensando no seu negócio como um todo.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-header for services */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
            <span className="w-12 h-px bg-foreground/30" />
            03 · Nossos Serviços
          </span>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Cada frente abaixo pode atuar sozinha ou combinada com as outras — quem define é o seu momento, não um pacote fechado.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {frentes.map((frente, index) => (
            <div
              key={frente.title}
              className={`relative p-8 lg:p-10 border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/30 transition-all duration-700 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-colors mb-6">
                <frente.icon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-3">{frente.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{frente.description}</p>
              <ul className="space-y-3">
                {frente.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlight badge */}
        <div className={`mt-12 p-8 border border-[#eca8d6]/30 bg-[#eca8d6]/[0.04] transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-center text-lg lg:text-xl font-mono tracking-tight text-foreground">
            SEM PACOTE FECHADO — A PROPOSTA NASCE DO DIAGNÓSTICO, NÃO O CONTRÁRIO.
          </p>
        </div>
      </div>
    </section>
  );
}
