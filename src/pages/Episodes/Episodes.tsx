import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import { useEpisodes } from "../../graphql/customHooks";

export default function Episodes() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useEpisodes(page);

  return (
    <div>
      Episodes
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data &&
        data.episodes.results.map((episode: any) => (
          <div key={episode.id}>
            <p>{episode.name}</p>
            <p>{episode.episode}</p>
            <p>{episode.air_date}</p>
            <Link to={`/episodes/${episode.id}`}>
              <button>Details</button>
            </Link>
            <hr />
          </div>
        ))}
      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={typeof data?.episodes?.info?.next === "number"}
        hasPreviousPage={typeof data?.episodes?.info?.prev === "number"}
      />
    </div>
  );
}
