import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api.client";
import { Genre } from "../entities/Genre";

const genreAPI = new APIClient<Genre>("/genres");
const useGenres = () => {
  const fetchGenres = () => {
    return genreAPI.getAll();
  };
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
};

export default useGenres;
