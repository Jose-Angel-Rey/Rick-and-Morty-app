import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import logo from "../../assets/images/logo.png";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 title="Rick and Morty app">
        <img className={styles.logo} src={logo} alt="Rick and Morty logo" />
      </h1>

      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/characters">
          <span>Characters</span>
        </Link>
        <Link className={styles.navLink} to="/episodes">
          <span>Episodes</span>
        </Link>
        <Link className={styles.navLink} to="/locations">
          <span>Locations</span>
        </Link>
      </nav>
    </main>
  );
}
