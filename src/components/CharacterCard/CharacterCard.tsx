import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";

type CharacterCardProps = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    id: string;
  };
};

export default function CharacterCard({
  id,
  name,
  image,
  status,
  species,
  gender,
  origin,
}: CharacterCardProps) {
  return (
    <div
      className={`${styles.container}
      ${gender === "Male" ? styles.male : styles.female}`}
    >
      <img className={styles.image} src={image} alt={name} />

      <div className={styles.content}>
        <span className={styles.contentSpecie}>({species})</span>
        <h3 className={styles.contentName}>{name}</h3>
        <p
          className={`${styles.contentStatus}
          ${status === "unknown" ? styles.unknown : ""}
          ${status === "Alive" ? styles.alive : styles.dead}`}
        >
          status:
          <span>{status}</span>
        </p>
        <p className={styles.contentOrigin}>
          Origin:
          <Link to={`/locations/${origin.id}`}>{origin.name}</Link>
        </p>
        <Link to={`/characters/${id}`} className={styles.contentButton}>
          <AiOutlineInfoCircle /> See more
        </Link>
      </div>
    </div>
  );
}
