import "./Taggar.css";

// Återanvänds av kompetenser, examensarbete och projekt
function Taggar({ lista }) {
  return (
    <div className="tags">
      {/* .map() gör om varje text i listan till en tagg, key hjälper React hålla ordning */}
      {lista.map((t) => (
        <span className="tag" key={t}>{t}</span>
      ))}
    </div>
  );
}
export default Taggar;
