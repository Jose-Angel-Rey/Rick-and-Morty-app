import { useParams } from "react-router-dom";
import { useCharacter } from "../../graphql/customHooks";

export default function Character() {
  const { id } = useParams() as { id: string };
  const { loading, error, data } = useCharacter(id);

  console.log("data", data);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {!loading && !error && (
        <>
          <img src={data.character.image} alt={data.character.name} />
          <p>{data.character.name}</p>
        </>
      )}
    </div>
  );
}

// id
// name
// image
// status
// species
// type
