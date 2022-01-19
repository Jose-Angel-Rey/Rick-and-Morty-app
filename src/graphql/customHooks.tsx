import { useQuery } from "@apollo/client";
import {
  CHARACTERS,
  CHARACTER_DETAIL,
  EPISODES,
  LOCATIONS,
} from "./queries";

export const useCharacters = (page: number) => {
  const result = useQuery(CHARACTERS, {
    variables: { page },
  });
  return result;
};

export const useCharacter = (id: string) => {
  const result = useQuery(CHARACTER_DETAIL, {
    variables: { id },
  });
  return result;
};

export const useEpisodes = (page: number) => {
  const result = useQuery(EPISODES, {
    variables: { page },
  });
  return result;
};

export const useLocations = (page: number) => {
  const result = useQuery(LOCATIONS, {
    variables: { page },
  });
  return result;
};