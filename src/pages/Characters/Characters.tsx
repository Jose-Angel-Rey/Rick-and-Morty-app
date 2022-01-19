import styles from "./Characters.module.scss";
import { useEffect, useState } from "react";
import { useCharacters } from "../../graphql/customHooks";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import headerImg from "../../assets/gifs/characters.gif";
import Header from "../../components/Header/Header";
import Error from "../../components/Error/Error";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Slider from "../../components/Slider/Slider";

export default function Characters() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useCharacters(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Header
        title="Characters"
        image={headerImg}
        subtitle={data?.characters?.info?.count}
      />
      <main className={styles.container}>
        {loading && <Loader />}
        {error && <Error />}

        {data && (
          <section className={styles.content}>
            <Slider>
              {data.characters.results?.slice(0, 10).map((character: any) => (
                <CharacterCard {...character} />
              ))}
            </Slider>
            <Slider>
              {data.characters.results.slice(10).map((character: any) => (
                <CharacterCard {...character} />
              ))}
            </Slider>
          </section>
        )}

        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={typeof data?.characters?.info?.next === "number"}
          hasPreviousPage={typeof data?.characters?.info?.prev === "number"}
        />
      </main>
    </>
  );
}

// characters(page: $page) {
//   info {
//     pages
//     count
//     next
//     prev
//   }
//   results {
//     id
//     name
//     image
//     status
//     species
//     gender
//     origin {
//       name
//       id
//     }
//   }
// }
