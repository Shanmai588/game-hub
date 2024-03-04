import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchRespones } from "../services/api.client";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "./useGameQueryStore";
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

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  return useInfiniteQuery<FetchRespones<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      console.log(gameQuery);
      return gameAPI.getFetchRespones({
        params: {
          genres: gameQuery.genreID,
          parent_platforms: gameQuery.platformID,
          ordering: gameQuery.sortType,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      // Check if the last page is full; if so, there might be a next page
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1, // Explicitly setting the initial page parameter
  });
};
export default useGames;
