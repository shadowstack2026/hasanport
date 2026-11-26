import "./ProjektKort.css";
import Taggar from "./Taggar";
import Animation from "./Animation";

// Ett projektkort – layouten finns bara här en gång. tid, status, animation, lank och knappText är valfria.
function ProjektKort({ titel, tid, text, teknik = [], lank, knappText, status, animation }) {
  return (
    <article className="card project reveal">
      <Animation namn={animation} />
      <div className="project-header">
        <h3>{titel}</h3>
        {tid && <time>{tid}</time>}
        {status && <span className="project-status">{status}</span>}
      </div>
      <p>{text}</p>
      <Taggar lista={teknik} />
      {/* && visar knappen bara om projektet har en länk */}
      {lank && (
        <div className="actions">
          <a className="button primary" href={lank} target="_blank" rel="noreferrer">{knappText}</a>
        </div>
      )}
    </article>
  );
}
export default ProjektKort;
