import "./Kontakt.css";
import SektionRubrik from "./SektionRubrik";
import { EMAIL, GITHUB_USER, LINKEDIN_URL, NAME } from "../data/Settings";
import { useSprak } from "../utils/useSprak";

function Kontakt() {
  const { text } = useSprak();
  const k = text.kontakt;

  const lankar = [
    { etikett: k.epost, varde: EMAIL, href: `mailto:${EMAIL}`, extern: false },
    { etikett: "GitHub", varde: `github.com/${GITHUB_USER}`, href: `https://github.com/${GITHUB_USER}`, extern: true },
    { etikett: "LinkedIn", varde: NAME, href: LINKEDIN_URL, extern: true },
  ];

  return (
    <section id="contact">
      <div className="container">
        <SektionRubrik etikett={k.etikett} rubrik={k.rubrik} intro={k.intro} />

        <div className="contact">
          <div className="card contact-card reveal">
            <h3>{k.kortRubrik}</h3>
            <p>{k.kortText}</p>
          </div>

          <div className="contact-links reveal">
            {lankar.map((l) => (
              <a
                key={l.etikett}
                className="contact-link"
                href={l.href}
                {...(l.extern ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="contact-text">
                  <span className="contact-label">{l.etikett}</span>
                  <span className="contact-value">{l.varde}</span>
                </span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Kontakt;
