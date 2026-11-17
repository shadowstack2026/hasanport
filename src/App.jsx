import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";

function App() {
  return (
    <>
      <Navbar />
      {/* Här byts sidan ut beroende på adressen. Originalet är en enda sida, så det bara finns en route. */}
      <Routes>
        <Route path="/" element={<Hem />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
