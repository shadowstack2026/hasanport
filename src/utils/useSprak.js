import { useContext } from "react";
import { SprakContext } from "./SprakContext";
import { TEXTER } from "../data/texter";

// Ger komponenter: sprak, setSprak, text (alla UI-texter på rätt språk) och t()
export function useSprak() {
  const { sprak, setSprak } = useContext(SprakContext);
  // t() väljer språk i data som ser ut som { en: "...", sv: "..." } – vanliga värden skickas rakt igenom
  const t = (varde) =>
    varde && typeof varde === "object" && !Array.isArray(varde) && "sv" in varde ? varde[sprak] : varde;
  return { sprak, setSprak, text: TEXTER[sprak], t };
}
