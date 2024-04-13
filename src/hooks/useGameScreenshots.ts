import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api.client";
import { Screenshot } from "../entities/Screenshot";

const useGameScreenshots = (id: number) => {
  const screenShotAPI = new APIClient<Screenshot>(`/games/${id}/screenshots`);
  const fetchScreenShots = () => {
    return screenShotAPI.getAll();
  };
  return useQuery({
    queryKey: ["games", id, "screenShot"],
    queryFn: fetchScreenShots,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGameScreenshots;
