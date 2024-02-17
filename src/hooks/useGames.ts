import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api.client";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}
const gameAPI = new APIClient<Game>("/games");
// Anytime gameQuery change, it will refetch the data
// const useGames = (gameQuery: GameQuery) => useData<Game>("/games", {params: {genres:gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery.sortType?.value, search:gameQuery.searchText}}, [gameQuery])
const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () => {
    return gameAPI.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortType?.value,
        search: gameQuery.searchText,
      },
    });
  };
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default useGames;
