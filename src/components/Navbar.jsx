import "./Navbar.css";
import { Link } from "react-router-dom";
import { NAME } from "../data/Settings";
import { useSprak } from "../utils/useSprak";

function Navbar() {
  const { sprak, setSprak, text } = useSprak();
  const n = text.nav;

  return (
    <header>
      <div className="container nav">
        {/* Länkar till sektioner på startsidan går via <Link to="/#id"> så att de fungerar från alla sidor */}
        <Link className="name" to="/#home">{NAME}</Link>
        <div className="nav-hoger">
          <nav className="nav-links" aria-label={n.meny}>
            <Link to="/#skills">{n.skills}</Link>
            <Link to="/#experience">{n.erfarenhet}</Link>
            <Link to="/#uppdrag">{n.uppdrag}</Link>
            <Link to="/#thesis">{n.thesis}</Link>
            <Link to="/#projects">{n.projects}</Link>
            <Link to="/#education">{n.education}</Link>
            <Link to="/#contact">{n.contact}</Link>
          </nav>
          {/* Knappen visar språket man byter TILL */}
          <button
            className="sprak-knapp"
            type="button"
            aria-label={n.bytSprakEtikett}
            onClick={() => setSprak(sprak === "en" ? "sv" : "en")}
          >
            {n.bytSprak}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
