import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import APIClient from "../services/api.client";
const platformAPI = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () => {
  const fetchPlatforms = () => {
    return platformAPI.getAll();
  };
  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
};

export default usePlatforms;
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
