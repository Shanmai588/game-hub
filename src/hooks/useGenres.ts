import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api.client";
import genres from "../data/genres";
interface FetchRespones<T> {
  count: number;
  results: T[];
}
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const fetchGenres = () => {
    return apiClient
      .get<FetchRespones<Genre>>("/genres")
      .then((res) => res.data.results);
  };
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 1000 * 1000,
    initialData: genres,
  });
};

export default useGenres;
