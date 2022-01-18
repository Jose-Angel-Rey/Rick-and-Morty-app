import { Link } from "react-router-dom";
import { useEpisodes } from "../../graphql/customHooks";

export default function Episodes() {
  const { loading, error, data } = useEpisodes();

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
    </div>
  );
}
