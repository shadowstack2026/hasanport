import "./Kompetenser.css";
import SektionRubrik from "./SektionRubrik";
import Taggar from "./Taggar";
import kompetenser from "../data/kompetenser.json";
import { useSprak } from "../utils/useSprak";

function Kompetenser() {
  const { text, t } = useSprak();
  const k = text.kompetenser;

  return (
    <section id="skills">
      <div className="container">
        <SektionRubrik etikett={k.etikett} rubrik={k.rubrik} intro={k.intro} />

        <div className="skills">
          {kompetenser.map((grupp) => (
            <article className="card skill-group reveal" key={grupp.id}>
              <h3>{t(grupp.rubrik)}</h3>
              <Taggar lista={grupp.teknik.map(t)} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Kompetenser;
