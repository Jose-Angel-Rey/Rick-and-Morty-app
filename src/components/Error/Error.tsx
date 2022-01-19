import styles from "./Error.module.scss";
import gif from "../../assets/gifs/not-found.gif";

export default function Error() {
  return (
    <div className={styles.container}>
      <img src={gif} alt="Not Found" />
      <h1>Page not found</h1>
    </div>
  );
}
