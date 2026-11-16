import "./SektionRubrik.css";

// Rubrikblocket som upprepas överst i varje sektion
function SektionRubrik({ etikett, rubrik, intro }) {
  return (
    <div className="section-heading reveal">
      <div className="label">{etikett}</div>
      <h2>{rubrik}</h2>
      {/* && visar stycket bara om intro finns */}
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
export default SektionRubrik;
