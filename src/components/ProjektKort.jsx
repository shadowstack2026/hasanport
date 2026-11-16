import "./ProjektKort.css";
import Taggar from "./Taggar";

// Ett projektkort – layouten finns bara här en gång. tid, lank och knappText är valfria.
function ProjektKort({ titel, tid, text, teknik = [], lank, knappText }) {
  return (
    <article className="card project reveal">
      <div className="project-header">
        <h3>{titel}</h3>
        {tid && <time>{tid}</time>}
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
