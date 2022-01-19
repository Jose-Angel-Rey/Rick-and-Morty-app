import { Route, Routes, useLocation } from "react-router-dom";
import styles from "./App.module.scss";

import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Characters from "./pages/Characters/Characters";
import Episodes from "./pages/Episodes/Episodes";
import Locations from "./pages/Locations/Locations";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const { pathname } = useLocation();

  return (
    <div className={styles.App}>
      {pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
