import { useParams } from "react-router-dom";
import { useEpisode } from "../../graphql/customHooks";

export default function Episode() {
  const { id } = useParams() as { id: string };
  const { loading, error, data } = useEpisode(id);

  return (
    <div>
      Episode detail
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {!loading && !error && (
        <>
          <p>{data.episode.name}</p>
          <p>{data.episode.episode}</p>
          <p>{data.episode.air_date}</p>
          <p>{data.episode.characters.length}</p>
        </>
      )}
    </div>
  );
}
