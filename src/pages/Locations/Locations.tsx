import { Link } from "react-router-dom";
import { useLocations } from "../../graphql/customHooks";

export default function Locations() {
  const { loading, error, data } = useLocations();
  return (
    <div>
      Locations
      <hr />
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && (
        <ul>
          {data.locations.results.map((location: any) => (
            <li key={location.id}>
              {location.type}
              <Link to={`/locations/${location.id}`}>{location.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
