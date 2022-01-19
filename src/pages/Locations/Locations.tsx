import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocations } from "../../graphql/customHooks";
import Pagination from "../../components/Pagination/Pagination";

export default function Locations() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useLocations(page);

  console.log("location", data?.locations?.info);
  return (
    <div>
      Locations
      <hr />
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
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
      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={typeof data?.locations?.info?.next === "number"}
        hasPreviousPage={typeof data?.locations?.info?.prev === "number"}
      />
    </div>
  );
}
