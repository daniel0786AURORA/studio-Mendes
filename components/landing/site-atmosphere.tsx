const petals = [
  { left: "8%", delay: "0s", dur: "15s", scale: 1 },
  { left: "18%", delay: "6s", dur: "19s", scale: 0.7 },
  { left: "27%", delay: "2s", dur: "17s", scale: 1.2 },
  { left: "39%", delay: "9s", dur: "21s", scale: 0.8 },
  { left: "51%", delay: "4s", dur: "16s", scale: 1.1 },
  { left: "63%", delay: "11s", dur: "22s", scale: 0.6 },
];

export function SiteAtmosphere() {
  return (
    <div className="site-aura" aria-hidden="true">
      {/* glows que flutuam — mesma paleta do hero */}
      <div
        className="aura-blob"
        style={{ width: "34vw", height: "34vw", top: "-6vh", right: "-6vw", background: "rgba(236,168,214,.26)" }}
      />
      <div
        className="aura-blob"
        style={{ width: "30vw", height: "30vw", top: "42vh", left: "-8vw", background: "rgba(167,139,250,.22)" }}
      />
      {/* pétalas caindo, bem sutis */}
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.dur,
            transform: `scale(${p.scale})`,
          }}
        />
      ))}
    </div>
  );
}
