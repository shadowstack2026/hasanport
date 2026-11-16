import { createContext } from "react";

// Håller koll på valt språk ("en" eller "sv") för hela sidan
export const SprakContext = createContext({ sprak: "en", setSprak: () => {} });
