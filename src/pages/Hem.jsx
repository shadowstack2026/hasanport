import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import OmMig from "../components/OmMig";
import Kompetenser from "../components/Kompetenser";
import Examensarbete from "../components/Examensarbete";
import Projekt from "../components/Projekt";
import Utbildning from "../components/Utbildning";
import Kontakt from "../components/Kontakt";
import { useReveal } from "../utils/useReveal";

// Sidan staplar bara komponenter
function Hem() {
  useReveal();
  const { hash } = useLocation();

  // Länkar som /#about scrollar till rätt sektion (även när man kommer från en annan sida)
  useEffect(() => {
    const mal = hash ? document.getElementById(hash.slice(1)) : null;
    if (mal) mal.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <main>
      <Hero />
      <OmMig />
      <Kompetenser />
      <Examensarbete />
      <Projekt />
      <Utbildning />
      <Kontakt />
    </main>
  );
}
export default Hem;
