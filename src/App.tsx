import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";

// Pages
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Characters from "./pages/Characters/Characters";
import Episode from "./pages/Episode/Episode";
import Episodes from "./pages/Episodes/Episodes";
import Location from "./pages/Location/Location";
import Locations from "./pages/Locations/Locations";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<Episode />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
