import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchRespones } from "./useData";
import { Genre } from "./useGenres";
import apiClient from "../services/api.client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}
// Anytime gameQuery change, it will refetch the data
// const useGames = (gameQuery: GameQuery) => useData<Game>("/games", {params: {genres:gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery.sortType?.value, search:gameQuery.searchText}}, [gameQuery])
const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () => {
    return apiClient
      .get<FetchRespones<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortType?.value,
          search: gameQuery.searchText,
        },
      })
      .then((res) => res.data.results);
  };
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default useGames;
