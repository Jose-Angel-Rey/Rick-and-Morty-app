import { Link, useParams } from "react-router-dom";
import { useLocation } from "../../graphql/customHooks";

export default function Location() {
  const { id } = useParams() as { id: string };

  const { loading, error, data } = useLocation(id);

  return (
    <div>
      Location detail
      <hr />
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && (
        <div>
          <h1>{data.location.name}</h1>
          <p>{data.location.type}</p>
          <p>{data.location.dimension}</p>

          <h2>Residents</h2>
          <ul>
            {data.location.residents.map((resident: any) => (
              <li key={resident.id}>
                <img src={resident.image} alt={resident.name} />
                <Link to={`/characters/${resident.id}`}>{resident.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
