import "./Examensarbete.css";
import SektionRubrik from "./SektionRubrik";
import Taggar from "./Taggar";
import examensBild from "../assets/eso.png";
import { AVHANDLING_URL } from "../data/Settings";
import { useSprak } from "../utils/useSprak";

const TEKNIK = ["ESP32-C3", "ESP-IDF", "Python", "CSI", "RSSI", "FTM"];

function Examensarbete() {
  const { text } = useSprak();
  const e = text.examensarbete;

  return (
    <section id="thesis">
      <div className="container">
        <SektionRubrik etikett={e.etikett} rubrik={e.rubrik} />

        <article className="thesis reveal">
          <div className="thesis-visual">
            <img src={examensBild} alt={e.bildAlt} />
          </div>

          <div className="card">
            <h3>{e.titel}</h3>
            <p>{e.stycke1}</p>
            <p>{e.stycke2}</p>
            <Taggar lista={TEKNIK} />
            <div className="actions">
              <a className="button primary" href={AVHANDLING_URL} target="_blank" rel="noreferrer">
                {e.knapp}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Examensarbete;
