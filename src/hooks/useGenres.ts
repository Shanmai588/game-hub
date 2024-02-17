import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api.client";
import genres from "../data/genres";
import { FetchRespones } from "./useData";

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
    staleTime: 24*60*60 * 1000,
    initialData: genres,
  });
};

export default useGenres;
