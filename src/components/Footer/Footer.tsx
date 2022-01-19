import styles from "./Footer.module.scss";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p>
        Developed by
        <a
          href="https://github.com/Jose-Angel-Rey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jose Angel Rey
        </a>
        <FaGithub />
      </p>
    </footer>
  );
}
