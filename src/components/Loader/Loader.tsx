import styles from "./Loader.module.scss";
import loader from "../../assets/gifs/loader.gif";
export default function Loader() {
  return (
    <div className={styles.container}>
      <img src={loader} alt="Loader.." />
    </div>
  );
}
