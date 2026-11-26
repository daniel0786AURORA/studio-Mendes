"use client";
import { Check, ArrowRight } from "lucide-react";

const CALENDLY = "https://calendly.com/danielsm0786/30min";

const planos = [
  {
    nome: "Uma frente",
    escopo: "Marketing, tecnologia ou negócios",
    texto: "A gente foca numa área e faz a nota dela subir.",
    destaque: false,
    itens: [
      "1 pilar escolhido no Mapa",
      "Execução + acompanhamento da nota",
      "Ritmo mais leve no caixa",
    ],
  },
  {
    nome: "Duas frentes",
    escopo: "Duas áreas ao mesmo tempo",
    texto: "Porque mexer só numa raramente resolve o negócio inteiro.",
    destaque: true,
    itens: [
      "2 pilares em paralelo",
      "Ganho mais rápido e equilibrado",
      "Prioridades definidas no Mapa",
    ],
  },
  {
    nome: "Tudo junto",
    escopo: "As três frentes de uma vez",
    texto: "Destravar o crescimento no menor tempo possível.",
    destaque: false,
    itens: [
      "Marketing + tecnologia + negócios",
      "Evolução mais acelerada",
      "Acompanhamento completo da nota",
    ],
  },
];

export function ScopePricingSection() {
  return (
    <section id="escopo" className="relative text-foreground py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-12 h-px bg-foreground/30" />
            ESCOPO
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[.95]">
            Você escolhe o que<br />
            <span className="text-muted-foreground">a gente ataca.</span>
          </h2>
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
            Uma frente, duas, ou todas ao mesmo tempo. Quanto mais a gente ataca junto, mais rápido a nota sobe. Sem pacote fechado: o orçamento sai da conversa, no tamanho do teu momento.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-4">
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`box-elegant relative flex flex-col p-8 lg:p-10 ${
                p.destaque ? "lg:scale-[1.03] lg:z-10 border-[#eca8d6]/45" : ""
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-8 inline-flex items-center px-3 py-1 bg-foreground text-background text-[11px] font-mono uppercase tracking-widest">
                  Mais escolhido
                </span>
              )}
              <h3 className="text-3xl font-display">{p.nome}</h3>
              <p className="mt-2 text-sm font-mono text-muted-foreground uppercase tracking-wide">{p.escopo}</p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{p.texto}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {p.itens.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 h-13 px-6 py-4 rounded-full text-sm font-medium transition-colors ${
                  p.destaque
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-foreground/20 hover:border-foreground/50"
                }`}
              >
                Agendar conversa grátis <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-foreground/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p className="text-lg text-muted-foreground max-w-2xl">
            Prefere começar devagar? A gente ajusta uma frente, deixa a nota boa, e só depois parte pra próxima — no teu ritmo. Você escolhe por onde e quando.
          </p>
          <a href="#como-funciona" className="text-sm underline underline-offset-4 hover:text-foreground transition-colors whitespace-nowrap">
            Ver como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
