const estacoes = [
  { nome: "Descoberta", cor: "#86efac", blur: false },
  { nome: "Contato · WhatsApp", cor: "#fca5a5", blur: false },
  { nome: "Atendimento", cor: "#fcd34d", blur: true },
  { nome: "Venda · ticket", cor: "#fcd34d", blur: false },
  { nome: "Pós-venda", cor: "#fca5a5", blur: true },
  { nome: "Recompra", cor: "#86efac", blur: false },
];

const evolucao = [25, 33, 40, 58]; // Tráfego — mês 1 → mês 6

const R = 52;
const C = 2 * Math.PI * R;
const nota = 64;

export function MapaPreview() {
  return (
    <div className="box-elegant relative overflow-hidden p-6 lg:p-8">
      {/* brilho interno (retroiluminado) */}
      <div
        className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "rgba(236,168,214,.22)" }}
      />

      {/* header */}
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-widest text-white/50">MAPA DA EMPRESA</span>
        <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
          exemplo
        </span>
      </div>

      {/* nota + legenda */}
      <div className="relative mt-6 flex items-center gap-6">
        <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0">
          <defs>
            <linearGradient id="notaGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#eca8d6" />
              <stop offset="60%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
            <filter id="notaGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke="url(#notaGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - nota / 100)}
            transform="rotate(-90 60 60)"
            filter="url(#notaGlow)"
          />
          <text x="60" y="58" textAnchor="middle" className="fill-white font-display" style={{ fontSize: 30 }}>
            {nota}
          </text>
          <text x="60" y="78" textAnchor="middle" className="fill-white/40 font-mono" style={{ fontSize: 10 }}>
            /100
          </text>
        </svg>
        <div className="space-y-2.5">
          <p className="font-display text-xl text-white">Nota de saúde</p>
          <div className="space-y-1.5 font-mono text-[11px] text-white/55">
            <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: "#86efac" }} /> 9 funcionam bem</p>
            <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: "#fcd34d" }} /> 26 pedem atenção</p>
            <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: "#fca5a5" }} /> 21 problemas graves</p>
          </div>
        </div>
      </div>

      {/* jornada (parcialmente borrada pra não copiar o método) */}
      <div className="relative mt-7 border-t border-white/10 pt-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">Jornada do cliente</p>
        <div className="space-y-2">
          {estacoes.map((e) => (
            <div
              key={e.nome}
              className={`flex items-center justify-between rounded-lg bg-white/[.03] px-3 py-2 ${e.blur ? "tease-blur" : ""}`}
            >
              <span className="flex items-center gap-3 text-sm text-white/75">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: e.cor, boxShadow: `0 0 10px ${e.cor}` }} />
                {e.nome}
              </span>
              <span className="h-1.5 w-16 rounded-full" style={{ background: e.cor, opacity: 0.35 }} />
            </div>
          ))}
        </div>
      </div>

      {/* evolução — o diferencial */}
      <div className="relative mt-7 border-t border-white/10 pt-5">
        <div className="mb-3 flex items-end justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Evolução · Tráfego pago</p>
          <p className="font-display text-lg text-white">
            25 <span className="text-white/40">→</span> 58
          </p>
        </div>
        <div className="flex h-24 items-end gap-2">
          {evolucao.map((v, i) => (
            <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
              <div
                className="evo-bar w-full rounded-t-md"
                style={{
                  height: `${16 + v}px`,
                  background: "linear-gradient(to top, #a78bfa, #eca8d6)",
                  boxShadow: "0 0 18px -4px rgba(236,168,214,.6)",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
              <span className="font-mono text-[9px] text-white/35">m{i === 0 ? 1 : i * 2}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
