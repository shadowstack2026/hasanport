import SektionRubrik from "./SektionRubrik";
import ProjektKort from "./ProjektKort";
import uppdragLista from "../data/uppdrag.json";
import { useSprak } from "../utils/useSprak";

// Riktiga projekt för företag. Lägg till fler i src/data/uppdrag.json
// (tid och teknik är valfria, text kan vara en vanlig sträng om den inte behöver översättas)
function Uppdrag() {
  const { text, t } = useSprak();
  const u = text.uppdrag;

  return (
    <section id="uppdrag">
      <div className="container">
        <SektionRubrik etikett={u.etikett} rubrik={u.rubrik} intro={u.intro} />

        <div className="projects">
          {uppdragLista.map((p) => (
            <ProjektKort
              key={p.id}
              titel={t(p.titel)}
              tid={p.tid}
              text={t(p.text)}
              teknik={(p.teknik || []).map(t)}
              lank={p.lank}
              status={p.status && t(p.status)}
              animation={p.animation}
              knappText={u.knapp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Uppdrag;
