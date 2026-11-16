import "./Kontakt.css";
import SektionRubrik from "./SektionRubrik";
import { EMAIL, GITHUB_USER, LINKEDIN_URL, NAME } from "../data/Settings";
import { useSprak } from "../utils/useSprak";

function Kontakt() {
  const { text } = useSprak();
  const k = text.kontakt;

  return (
    <section id="contact">
      <div className="container">
        <SektionRubrik etikett={k.etikett} rubrik={k.rubrik} intro={k.intro} />

        <div className="contact">
          <div className="card reveal">
            <h3>{k.kortRubrik}</h3>
            <p>{k.kortText}</p>
          </div>

          <div className="contact-links reveal">
            <a className="contact-link" href={`mailto:${EMAIL}`}>
              {k.epost} — {EMAIL}
            </a>
            <a className="contact-link" href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">
              GitHub — github.com/{GITHUB_USER}
            </a>
            <a className="contact-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn — {NAME}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Kontakt;
