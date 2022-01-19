import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../assets/favicon.webp";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/">
            <img src={logo} alt="Logo" className={styles.navLogo} />
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/characters">
            Characters
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/episodes">
            Episodes
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to="/locations">
            Locations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
