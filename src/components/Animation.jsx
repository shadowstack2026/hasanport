import "./Animation.css";

// Små dekorativa SVG-animationer, en per projekt. Väljs med fältet "animation" i JSON-filerna.
const SCENER = {
  // Reklambyrå: ett kort flyttas mellan kolumnerna på en projekttavla
  tavla: (
    <>
      {[40, 125, 210].map((x) => <rect key={x} className="a-yta" x={x} y="12" width="70" height="76" rx="6" />)}
      <rect className="a-fyll" x="48" y="46" width="54" height="10" rx="3" />
      <rect className="a-fyll" x="218" y="22" width="54" height="10" rx="3" />
      <rect className="a-accent a-flytta" x="48" y="22" width="54" height="16" rx="4" />
    </>
  ),
  // Hubb: företag kopplade till en gemensam nod
  hubb: (
    <>
      <path className="a-linje a-flode" d="M160 50 L70 24 M160 50 L80 80 M160 50 L250 22 M160 50 L242 78" />
      {[[70, 24], [80, 80], [250, 22], [242, 78]].map(([x, y]) => <circle key={x} className="a-yta" cx={x} cy={y} r="9" />)}
      <circle className="a-ring" cx="160" cy="50" r="14" />
      <circle className="a-accent" cx="160" cy="50" r="12" />
    </>
  ),
  // Priskalkylator: staplar som räknas fram
  kalkyl: (
    <>
      {[22, 38, 30, 52, 44, 66].map((h, i) => (
        <rect key={i} className="a-accent a-stapel" x={90 + i * 24} y={86 - h} width="14" height={h} rx="3" style={{ animationDelay: i * 0.18 + "s" }} />
      ))}
      <path className="a-linje" d="M78 88 H242" />
    </>
  ),
  // Dobot: armen plockar upp och sorterar en kloss
  dobot: (
    <>
      <path className="a-linje" d="M40 88 H280" />
      <rect className="a-yta" x="70" y="68" width="40" height="20" rx="3" />
      <rect className="a-yta" x="210" y="68" width="40" height="20" rx="3" />
      <rect className="a-fyll" x="145" y="76" width="30" height="12" rx="3" />
      <g className="a-arm">
        <path className="a-linje a-tjock" d="M160 76 V30 L160 30" />
        <path className="a-linje a-tjock" d="M160 30 V46" />
        <rect className="a-accent" x="152" y="46" width="16" height="14" rx="3" />
      </g>
    </>
  ),
  // Spel: en boll studsar över plattformar
  spel: (
    <>
      <path className="a-linje" d="M60 86 H260" />
      <rect className="a-yta" x="90" y="68" width="34" height="8" rx="3" />
      <rect className="a-yta" x="196" y="68" width="34" height="8" rx="3" />
      <g className="a-sidled"><circle className="a-accent a-studs" cx="100" cy="58" r="9" /></g>
    </>
  ),
  // Mikrokärna: schemaläggaren kör en uppgift i taget
  karna: (
    <>
      {[24, 50, 76].map((y, rad) => (
        <g key={y}>
          <path className="a-linje" d={"M50 " + y + " H270"} />
          <rect className="a-accent a-uppgift" x={60 + rad * 70} y={y - 8} width="56" height="16" rx="4" style={{ animationDelay: rad + "s" }} />
        </g>
      ))}
    </>
  ),
  // Smart hem: sensorsignaler från ett hus
  hem: (
    <>
      <path className="a-yta" d="M130 88 V48 L160 24 L190 48 V88 Z" />
      <rect className="a-accent a-blink" x="151" y="58" width="18" height="16" rx="2" />
      {[0, 1, 2].map((i) => (
        <g key={i} className="a-signal" style={{ animationDelay: i * 0.5 + "s" }}>
          <path className="a-linje a-cyan" d={"M" + (204 + i * 14) + " 36 q10 16 0 32"} />
          <path className="a-linje a-cyan" d={"M" + (116 - i * 14) + " 36 q-10 16 0 32"} />
        </g>
      ))}
    </>
  ),
};

function Animation({ namn }) {
  if (!SCENER[namn]) return null;
  return (
    <svg className="animation" viewBox="0 0 320 100" aria-hidden="true">
      {SCENER[namn]}
    </svg>
  );
}
export default Animation;
