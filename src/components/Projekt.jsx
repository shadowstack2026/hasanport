import "./Projekt.css";
import SektionRubrik from "./SektionRubrik";
import ProjektKort from "./ProjektKort";
import projektLista from "../data/projekt.json";
import { useSprak } from "../utils/useSprak";

function Projekt() {
  const { text, t } = useSprak();

  return (
    <section id="projects">
      <div className="container">
        <SektionRubrik etikett={text.projekt.etikett} rubrik={text.projekt.rubrik} />

        <div className="projects">
          {/* .map() skapar ett kort per projekt i data/projekt.json */}
          {projektLista.map((p) => (
            <ProjektKort key={p.id} titel={t(p.titel)} tid={p.tid} text={t(p.text)} teknik={p.teknik.map(t)} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projekt;
