import styles from "./Character.module.scss";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../graphql/customHooks";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

// Icons
import { HiOutlineStatusOnline } from "react-icons/hi";
import { GiHouse } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { BsGenderAmbiguous } from "react-icons/bs";
import { useEffect } from "react";

export default function Character() {
  const { id } = useParams() as { id: string };
  const { loading, error, data } = useCharacter(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.container}>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <section className={styles.character}>
          <img
            className={styles.image}
            src={data.character.image}
            alt={data.character.name}
          />

          <div className={styles.content}>
            <header className={styles.header}>
              <span className={styles.contentSpecie}>
                ({data.character.species})
              </span>
              <h1>{data.character.name}</h1>
            </header>

            <ul className={styles.details}>
              <li>
                <HiOutlineStatusOnline />
                <strong>Status: </strong>
                <span>{data.character.status}</span>
              </li>
              <li>
                <GiHouse />
                <strong>Origin:</strong>
                <span>{data.character.origin.name}</span>
              </li>
              <li>
                <GoLocation />
                <strong>Last known location: </strong>
                <span>{data.character.location.name}</span>
              </li>
              <li>
                <BsGenderAmbiguous />
                <strong>Gender: </strong>
                <span>{data.character.gender}</span>
              </li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
