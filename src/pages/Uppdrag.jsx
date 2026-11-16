import "./Uppdrag.css";
import { useEffect } from "react";
import SektionRubrik from "../components/SektionRubrik";
import ProjektKort from "../components/ProjektKort";
import uppdragLista from "../data/uppdrag.json";
import { useSprak } from "../utils/useSprak";
import { useReveal } from "../utils/useReveal";

// Uppdrag utanför skolan. Lägg till nya i src/data/uppdrag.json, t.ex.:
// { "id": 1, "titel": { "en": "...", "sv": "..." }, "tid": "2026",
//   "text": { "en": "...", "sv": "..." }, "teknik": ["React", "CSS"], "lank": "https://..." }
// (lank är valfri, och titel/text/teknik kan vara vanliga strängar om de inte behöver översättas)
function Uppdrag() {
  const { text, t } = useSprak();
  const u = text.uppdrag;
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="uppdrag" id="uppdrag">
        <div className="container">
          <SektionRubrik etikett={u.etikett} rubrik={u.rubrik} intro={u.intro} />

          {uppdragLista.length === 0 ? (
            <p className="uppdrag-tom">{u.tom}</p>
          ) : (
            <div className="projects">
              {uppdragLista.map((p) => (
                <ProjektKort
                  key={p.id}
                  titel={t(p.titel)}
                  tid={p.tid}
                  text={t(p.text)}
                  teknik={(p.teknik || []).map(t)}
                  lank={p.lank}
                  knappText={u.knapp}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
export default Uppdrag;
