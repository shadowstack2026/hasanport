import "./Animation.css";

// Wi-Fi-avkänning: signalen mellan två ESP32 störs när en person går förbi
function WifiAnimation() {
  const vag = "M70 60" + " q15 -14 30 0 t30 0".repeat(8);

  return (
    <svg className="animation wifi reveal" viewBox="0 0 600 120" aria-hidden="true">
      <path className="a-linje a-cyan a-flode" d={vag} />
      <path className="a-linje a-flode a-svag" d={vag} transform="translate(0 14)" />
      <path className="a-linje a-flode a-svag" d={vag} transform="translate(0 -14)" />
      {[40, 550].map((x, i) => (
        <g key={x}>
          <rect className="a-yta a-kant" x={x - 20} y="46" width="40" height="28" rx="6" />
          <circle className="a-accent a-blink" cx={x + 12} cy="53" r="2.5" />
          <text className="a-text" x={x} y="94">{i === 0 ? "ESP32 · TX" : "ESP32 · RX"}</text>
        </g>
      ))}
      <g className="a-person">
        <circle cx="300" cy="32" r="11" />
        <path d="M287 100 V58 q0 -12 13 -12 t13 12 V100 Z" />
      </g>
    </svg>
  );
}
export default WifiAnimation;
