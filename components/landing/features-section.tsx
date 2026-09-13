"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Laptop, ClipboardList } from "lucide-react";

const problems = [
  {
    number: "01",
    icon: Zap,
    title: "Tráfego sem estratégia",
    description: "Campanhas rodando sem clareza de funil, posicionamento ou processo comercial por trás.",
  },
  {
    number: "02",
    icon: Laptop,
    title: "Tecnologia fora de contexto",
    description: "Sistemas e automações pensados sem entender a operação real do negócio.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Processos que ninguém organiza",
    description: "Dados espalhados, CRM esquecido, decisões tomadas no achismo em vez de indicador.",
  },
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="problema"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                01 · O Problema
              </span>
              <h2
                className={`text-4xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Marketing sozinho
                <br />
                não resolve.
                <br />
                <span className="text-muted-foreground">O negócio precisa da imagem inteira.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                A maioria dos negócios contrata em pedaços: uma agência pro tráfego, um freelancer pro sistema, um consultor pro processo — cada um sem contexto do que o outro está fazendo. O resultado é esforço espalhado e crescimento mais lento do que deveria.
              </p>
            </div>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.number}
              className={`relative p-8 lg:p-10 border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/30 transition-all duration-700 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  <problem.icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">{problem.number}</span>
              </div>
              <h3 className="text-2xl font-display mb-4 group-hover:translate-x-1 transition-transform duration-500">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
