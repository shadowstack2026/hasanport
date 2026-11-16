import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import Uppdrag from "./pages/Uppdrag";

function App() {
  return (
    <>
      <Navbar />
      {/* Här byts sidan ut beroende på adressen. Originalet är en enda sida, så startsidan är en route och uppdragssidan en till. */}
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/uppdrag" element={<Uppdrag />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
