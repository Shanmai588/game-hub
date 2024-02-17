import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import apiClient from "../services/api.client";
import { FetchRespones } from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => {
  const fetchPlatforms = () => {
    return apiClient
      .get<FetchRespones<Platform>>("/platforms/lists/parents")
      .then((res) => res.data.results);
  };
  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
};

export default usePlatforms;
