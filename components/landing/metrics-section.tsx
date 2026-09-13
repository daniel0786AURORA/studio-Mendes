"use client";

import { useEffect, useState, useRef } from "react";

const examples = [
  {
    tab: "Tráfego pago",
    title: "Tráfego pago com estratégia",
    text: 'Não é só "botar dinheiro no Meta". É funil pensado, público certo, mensagem que converte — e cada real investido vira dado pra decidir o próximo passo.',
    problema: "Leads chegam, mas não convertem — funil com buraco entre interesse e compra.",
    solucao: "Reestruturar funil + implementar agente de IA pra qualificação imediata.",
    resultado: "+40% de conversão em 60 dias",
  },
  {
    tab: "Agentes de IA",
    title: "Agentes de IA — muito além do atendimento",
    text: 'Não é só um "chatbot de atendimento". É um agente treinado com a voz do seu negócio que entende o contexto e executa tarefas: atende, qualifica, agenda, faz follow-up e integra com seus sistemas.',
    problema: "Lead chega à noite e esfria até o dia seguinte.",
    solucao: "Agente de IA 24/7 responde na hora, qualifica e já deixa agendado.",
    resultado: "24/7 atendimento automatizado",
  },
  {
    tab: "Diagnóstico",
    title: "Diagnóstico & Plano Estratégico",
    text: "Antes de executar, a gente entende. Mapeamos o momento atual do negócio, identificamos o que trava e desenhamos um caminho claro — com prioridades, metas e próximos passos.",
    problema: "Não sei por onde começar pra crescer.",
    solucao: "Diagnóstico + plano sob medida com prioridades claras.",
    resultado: "Clareza antes de qualquer investimento",
  },
];

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      ctx.clearRect(0, 0, width, height);
      const gridSize = 60;
      const time = timeRef.current;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const wave = Math.sin(x * 0.01 + y * 0.01 + time) * 0.5 + 0.5;
          const size = 1 + wave * 2;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
          ctx.fill();
        }
      }
      const pulseY = (time * 30) % height;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, pulseY);
      ctx.lineTo(width, pulseY);
      ctx.stroke();
      timeRef.current += 0.02;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
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

  const current = examples[active];

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-2 px-3 py-1 bg-[#eca8d6]/10 text-[#eca8d6] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#eca8d6] animate-pulse" />
              04 · NA PRÁTICA
            </span>
          </div>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Cada frente, um resultado.
            <br />
            <span className="text-muted-foreground">Escolha a área e veja como funciona.</span>
          </h2>

          <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            Não é teoria — é o que entregamos no dia a dia. Clique em cada área e veja um exemplo real de como aplicamos.
          </p>
        </div>

        {/* Graph image */}
        <div className={`w-full mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real-time-graph-INFmn3u0MlUwvNPynoIhwxtPaPjxM5.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {examples.map((ex, index) => (
            <button
              key={ex.tab}
              type="button"
              onClick={() => setActive(index)}
              className={`px-5 py-3 text-sm font-medium border transition-all duration-300 ${
                active === index
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/20 text-muted-foreground hover:border-foreground/50"
              }`}
            >
              {ex.tab}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div key={active} className="grid lg:grid-cols-12 gap-6 animate-fadeIn">
          {/* Left: description */}
          <div className="lg:col-span-7 p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02]">
            <h3 className="text-2xl lg:text-3xl font-display mb-6">{current.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{current.text}</p>
          </div>

          {/* Right: problema / solução / resultado */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 border border-foreground/10 bg-foreground/[0.02]">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Problema</span>
              <p className="mt-2 text-foreground/80">{current.problema}</p>
            </div>
            <div className="p-6 border border-foreground/10 bg-foreground/[0.02]">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Solução</span>
              <p className="mt-2 text-foreground/80">{current.solucao}</p>
            </div>
            <div className="p-6 border border-[#eca8d6]/30 bg-[#eca8d6]/[0.06]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#eca8d6]">Resultado</span>
              <p className="mt-2 text-xl lg:text-2xl font-display text-foreground">{current.resultado}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
