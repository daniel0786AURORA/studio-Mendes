"use client";

import { useState, useEffect, useRef } from "react";

const blocks = [
  {
    label: "O Desafio",
    text: "Um e-commerce investia em tráfego, recebia leads, mas travava na conversão — sem funil claro e com resposta lenta a cada contato.",
  },
  {
    label: "A Solução",
    text: "Reestruturamos o funil, alinhamos a comunicação ao momento de compra e implementamos um agente de IA pra qualificar e responder na hora.",
  },
  {
    label: "O Resultado",
    text: "Mais conversão, atendimento 24/7 e uma operação que deixou de depender do improviso — com dados pra decidir o próximo passo.",
  },
];

export function DevelopersSection() {
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
    <section id="case" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Image — absolute, bottom-right, behind content */}
      <div
        className={`absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2813%29-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            08 · Case Real
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95]">
            Tecnologia pra resolver
            <br />
            <span className="text-muted-foreground">o negócio, não pra impressionar.</span>
          </h2>
        </div>

        {/* Blocks + testimonial — left half */}
        <div
          className={`max-w-[52%] min-w-[300px] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col gap-4 mb-8">
            {blocks.map((block, index) => (
              <div
                key={block.label}
                className={`p-6 border border-foreground/10 bg-background/60 backdrop-blur-sm transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 80 + 200}ms` }}
              >
                <span className="text-xs font-mono uppercase tracking-widest text-[#eca8d6]">
                  {block.label}
                </span>
                <p className="mt-2 text-foreground/80 leading-relaxed">{block.text}</p>
              </div>
            ))}
          </div>

          {/* Testimonial box */}
          <div className="p-8 border border-foreground/20 bg-background/60 backdrop-blur-sm">
            <p className="text-xl lg:text-2xl font-display leading-snug mb-4">
              &ldquo;Pela primeira vez senti que tinha um time pensando no negócio como um todo, e não só rodando anúncio.&rdquo;
            </p>
            <p className="text-sm text-muted-foreground">Cliente Studio Mendes · E-commerce</p>
          </div>
        </div>
      </div>
    </section>
  );
}
