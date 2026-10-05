"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MessageCircle } from "lucide-react";

const CALENDLY = "https://calendly.com/danielsm0786/30min?month=2026-09";
const WHATSAPP = "https://wa.me/5551984705191";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section id="proximo-passo" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                  <span className="w-8 h-px bg-foreground/30" />
                  PRÓXIMO PASSO
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-[68px] font-display tracking-tight mb-8 leading-[0.98]">
                  Teu mapa é o começo. <br /> A conversa traz o contexto.
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  30 minutos pra entender seu momento e mostrar, na prática, onde dá pra crescer.
                  Sem custo, sem compromisso e com diagnóstico antes de qualquer proposta.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background hover:opacity-90 px-8 h-14 text-base font-medium transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    <Calendar className="w-4 h-4" />
                    Aprofundar meu diagnóstico
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/[.05] px-8 h-14 text-base font-medium transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Falar no WhatsApp
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  25–30 minutos · gratuito · sem compromisso · atendimento direto
                </p>
              </div>

              {/* Right image */}
              <div className="hidden lg:flex items-end justify-center w-[600px] h-[650px] -mr-16">
                <img
                  src="/images/bridge.png"
                  alt="Duas árvores conectadas por arcos de luz"
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
