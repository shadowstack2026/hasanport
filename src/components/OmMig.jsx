import "./OmMig.css";
import SektionRubrik from "./SektionRubrik";
import fakta from "../data/fakta.json";
import { useSprak } from "../utils/useSprak";

function OmMig() {
  const { text, t } = useSprak();
  const o = text.omMig;

  return (
    <section id="about">
      <div className="container">
        <SektionRubrik etikett={o.etikett} rubrik={o.rubrik} intro={o.intro} />

        <div className="about-grid">
          <article className="card reveal">
            <p>{o.stycke1}</p>
            <p>{o.stycke2}</p>
          </article>

          <aside className="card facts reveal">
            {/* Faktaraderna kommer från data/fakta.json */}
            {fakta.map((f) => (
              <div className="fact" key={f.id}>
                <strong>{t(f.rubrik)}</strong>
                <span>{t(f.text)}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
export default OmMig;
