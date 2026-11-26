import "./Erfarenhet.css";
import SektionRubrik from "./SektionRubrik";
import { useSprak } from "../utils/useSprak";

function Erfarenhet() {
  const { text } = useSprak();
  const e = text.erfarenhet;

  return (
    <section id="experience">
      <div className="container">
        <SektionRubrik etikett={e.etikett} rubrik={e.rubrik} intro={e.intro} />

        <div className="experience">
          {e.punkter.map((p, i) => (
            // index som key så att kortet inte byts ut (och tappar "visible") vid språkbyte
            <article className="card reveal" key={i}>
              <h3>{p.titel}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Erfarenhet;
