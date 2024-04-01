import APIClient from "../services/api.client";
import { useQuery } from "@tanstack/react-query";

import { Game } from "../entities/Game";

const gameAPI = new APIClient<Game>("/games");
const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => gameAPI.get(slug),
    staleTime: 60 * 60,
  });
};
export default useGame;
