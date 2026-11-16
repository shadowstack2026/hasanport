import "./Hero.css";
import profilBild from "../assets/profil.png";
import { NAME } from "../data/Settings";
import { useSprak } from "../utils/useSprak";

function Hero() {
  const { text } = useSprak();
  const h = text.hero;

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <div className="intro">{h.intro}</div>
          <h1>{NAME}</h1>
          <p className="role">{h.roll}</p>
          <p className="focus">{h.fokus}</p>
          {/* Ett stycke per sträng i listan */}
          {h.lead.map((stycke) => (
            <p className="lead" key={stycke}>{stycke}</p>
          ))}

          <div className="current-work">
            <strong>{h.arbeteRubrik}</strong>
            <span>{h.arbete}</span>
          </div>

          <div className="actions">
            <a className="button primary" href="#projects">{h.visaProjekt}</a>
            <button className="button" type="button" onClick={() => window.print()}>{h.sparaPdf}</button>
          </div>
        </div>

        <div className="robot-stage" aria-label={h.robotEtikett}>
          <div className="robot-heading">
            <span className="robot-status" aria-hidden="true"></span>
            {h.robotRubrik}
          </div>

          <div className="robot-frame">
            <iframe
              src="https://my.spline.design/genkubgreetingrobot-WN7miyMdLMX3YoTa6cIsl8cu/"
              title={h.robotTitel}
              frameBorder="0"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              loading="eager">
            </iframe>

            <div className="profile-badge">
              <img src={profilBild} alt={h.bildAlt} />
              <div>
                <strong>{NAME}</strong>
                <span>{h.badgeTitel}</span>
              </div>
            </div>
          </div>

          <p className="robot-note">{h.robotNot}</p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
