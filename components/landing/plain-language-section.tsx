"use client";

import { ArrowUpRight, Bot, ChartNoAxesCombined, Megaphone } from "lucide-react";

const paths = [
  {
    icon: Megaphone,
    eyebrow: "ATRAIR",
    title: "Mais gente certa chegando.",
    text: "Posicionamento, campanhas, conteúdo e funil para transformar atenção em oportunidade comercial.",
  },
  {
    icon: Bot,
    eyebrow: "OPERAR",
    title: "Menos trabalho manual.",
    text: "Sistemas, automações e inteligência para a operação ganhar velocidade sem depender de gambiarra.",
  },
  {
    icon: ChartNoAxesCombined,
    eyebrow: "CRESCER",
    title: "Mais clareza para decidir.",
    text: "Estratégia, indicadores e prioridades para saber onde mexer primeiro e onde vale colocar dinheiro.",
  },
];

export function PlainLanguageSection() {
  return (
    <section id="na-pratica" className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_50%_100%,rgba(167,139,250,.16),transparent_42%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-white/45">
              <span className="h-px w-12 bg-white/25" />
              TRADUZINDO O QUE FAZEMOS
            </span>
            <h2 className="font-display text-5xl leading-[.95] tracking-tight md:text-6xl lg:text-7xl">
              A gente encontra onde teu negócio
              <span className="text-white/35"> está deixando dinheiro na mesa.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              E ajuda a corrigir. Às vezes o problema está em atrair clientes. Às vezes está na venda, na operação, na tecnologia ou na falta de informação para decidir. O Studio Mendes olha o conjunto antes de prescrever a solução.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {paths.map((item) => (
                <article key={item.eyebrow} className="group relative overflow-hidden border border-white/10 bg-white/[.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/30 lg:p-9">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/[.06] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-black/30 transition-colors group-hover:border-[#eca8d6]/60">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs tracking-[.2em] text-[#eca8d6]">{item.eyebrow}</span>
                      <h3 className="mt-2 font-display text-3xl">{item.title}</h3>
                      <p className="mt-3 max-w-2xl leading-relaxed text-white/55">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-5 border border-[#eca8d6]/25 bg-[#eca8d6]/[.05] p-7 sm:flex-row sm:items-center sm:justify-between lg:p-9">
              <p className="max-w-xl text-lg leading-relaxed text-white/75">
                <strong className="font-medium text-white">Tu não precisa saber exatamente o que precisa.</strong>{" "}
                A gente entende teu momento, encontra o gargalo e monta o que faz sentido.
              </p>
              <a href="#como-funciona" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70">
                Ver como funciona <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-2 border-t border-white/10 pt-8 text-center font-mono text-[10px] tracking-[.15em] text-white/35 sm:text-xs">
          <span>RAIZ · NEGÓCIO</span>
          <span>ESTRUTURA · TECNOLOGIA</span>
          <span>CRESCIMENTO · MARKETING</span>
        </div>
      </div>
    </section>
  );
}
