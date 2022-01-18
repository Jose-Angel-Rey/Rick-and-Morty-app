import { Link } from "react-router-dom";
import { useCharacters } from "../../graphql/customHooks";

export default function Characters() {
  const { loading, error, data } = useCharacters();

  console.log(data);

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
    </main>
  );
}
