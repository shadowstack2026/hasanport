import "./Utbildning.css";
import SektionRubrik from "./SektionRubrik";
import utbildning from "../data/utbildning.json";
import { useSprak } from "../utils/useSprak";

function Utbildning() {
  const { text, t } = useSprak();

  return (
    <section id="education">
      <div className="container">
        <SektionRubrik etikett={text.utbildning.etikett} rubrik={text.utbildning.rubrik} />

        <div className="card timeline reveal">
          {utbildning.map((u) => (
            <article className="timeline-entry" key={u.id}>
              <h3>{t(u.titel)}</h3>
              <div className="meta">{t(u.meta)}</div>
              <p>{t(u.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Utbildning;
