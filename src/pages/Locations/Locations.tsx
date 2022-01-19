import styles from "./Locations.module.scss";
import { useEffect, useState } from "react";
import { useLocations } from "../../graphql/customHooks";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";
import headerImg from "../../assets/gifs/locations.gif";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import Slider from "../../components/Slider/Slider";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

export default function Locations() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useLocations(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Header
        title="Locations"
        image={headerImg}
        subtitle={data?.locations?.info?.count}
      />
      <main>
        {loading && <Loader />}
        {error && <Error />}

        {data && (
          <section className={styles.content}>
            {data.locations.results.map((location: any) => (
              <section key={location.id} className={styles.location}>
                <header className={styles.locationHeader}>
                  <span>{location.type}</span>
                  <h2>{location.name} </h2>
                </header>
                <Slider>
                  {location.residents.map((resident: any) => (
                    <CharacterCard key={resident.id} {...resident} />
                  ))}
                </Slider>
              </section>
            ))}
          </section>
        )}

        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={typeof data?.locations?.info?.next === "number"}
          hasPreviousPage={typeof data?.locations?.info?.prev === "number"}
        />
      </main>
    </>
  );
}