import styles from "./Episodes.module.scss";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import { useEpisodes } from "../../graphql/customHooks";
import headerImg from "../../assets/gifs/episodes.gif";
import Loader from "../../components/Loader/Loader";
import { BiMovie } from "react-icons/bi";
import Error from "../../components/Error/Error";

export default function Episodes() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useEpisodes(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Header
        title="Episodes"
        image={headerImg}
        subtitle={data?.episodes?.info?.count}
      />
      <main>
        {loading && <Loader />}
        {error && <Error />}
        {data && (
          <section className={styles.grid}>
            {data.episodes.results.map((episode: any) => (
              <div key={episode.id} className={styles.episode}>
                <BiMovie />
                <div className={styles.content}>
                  <h3 className={styles.contentName}>{episode.name}</h3>
                  <p className={styles.contentEpisode}>
                    Season {episode.episode.slice(1, 3)}
                  </p>
                  <p className={styles.contentEpisode}>
                    Episode {episode.episode.slice(4, 6)}
                  </p>
                  <p className={styles.contentAirDate}>{episode.air_date}</p>
                </div>
              </div>
            ))}
          </section>
        )}
        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={typeof data?.episodes?.info?.next === "number"}
          hasPreviousPage={typeof data?.episodes?.info?.prev === "number"}
        />
      </main>
    </>
  );
}
