import { Link } from "react-router-dom";
import { useState } from "react";
import { useCharacters } from "../../graphql/customHooks";
import Pagination from "../../components/Pagination/Pagination";

export default function Characters() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useCharacters(page);
  
  return (
    <main>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data &&
        data.characters.results.map((character: any) => (
          <div key={character.name}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <Link to={`/characters/${character.id}`}>
              <button>Details</button>
            </Link>
            <hr />
          </div>
        ))}

      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={typeof data?.characters?.info?.next === "number"}
        hasPreviousPage={typeof data?.characters?.info?.prev === "number"}
      />
    </main>
  );
}
