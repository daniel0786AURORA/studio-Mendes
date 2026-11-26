"use client";
import { ArrowRight, Eye } from "lucide-react";
import { MapaPreview } from "./mapa-preview";

export function ScanSection() {
  return (
    <section id="scan" className="relative text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 [background:radial-gradient(circle_at_80%_40%,rgba(236,168,214,.12),transparent_45%)]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
        {/* texto */}
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-6">
            <span className="w-12 h-px bg-white/20" />O MAPA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[.98]">
            Um raio-x do teu negócio.
            <br />
            <span className="text-white/40">E um jeito de ver ele evoluir.</span>
          </h2>
          <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-xl">
            A gente traduz tua empresa num mapa, com uma nota pra cada parte. Você enxerga onde
            trava, o que vamos atacar primeiro — e vê a nota subir mês a mês.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#eca8d6]/25 bg-[#eca8d6]/[.05] p-5">
            <Eye className="mt-0.5 h-5 w-5 shrink-0 text-[#eca8d6]" />
            <p className="text-sm text-white/75 leading-relaxed">
              <span className="text-white font-medium">Nada de caixa-preta.</span> Você acompanha o
              que foi feito e o resultado real no negócio — não só número de leads. Esse
              acompanhamento é o que, na maioria das agências, fica perdido.
            </p>
          </div>

          <a
            href="#proximo-passo"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white text-black px-7 h-14 font-medium hover:bg-white/90 transition-colors"
          >
            Agendar conversa grátis <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* preview do mapa */}
        <div className="lg:col-span-7">
          <MapaPreview />
        </div>
      </div>
    </section>
  );
}
