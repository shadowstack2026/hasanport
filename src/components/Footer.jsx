import "./Footer.css";
import { NAME, COPYRIGHT_AR } from "../data/Settings";
import { copyright } from "../utils/text";

function Footer() {
  return (
    <footer>
      <div className="container">{copyright(COPYRIGHT_AR, NAME)}</div>
    </footer>
  );
}
export default Footer;
