import { useEffect, useState } from "react";
import { SprakContext } from "../utils/SprakContext";

function hamtaSparatSprak() {
  try {
    return localStorage.getItem("sprak") === "sv" ? "sv" : "en";
  } catch {
    return "en";
  }
}

function SprakProvider({ children }) {
  const [sprak, setSprak] = useState(hamtaSparatSprak);

  // Spara valet och uppdatera lang på <html> varje gång språket ändras
  useEffect(() => {
    document.documentElement.lang = sprak;
    try {
      localStorage.setItem("sprak", sprak);
    } catch {
      // localStorage kan vara blockerat – då glöms valet bara bort
    }
  }, [sprak]);

  return <SprakContext.Provider value={{ sprak, setSprak }}>{children}</SprakContext.Provider>;
}
export default SprakProvider;
