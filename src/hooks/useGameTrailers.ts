import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api.client";
import { Trailer } from "../entities/Trailer";

const useGameTrailers = (id: number) => {
  const trailerAPI = new APIClient<Trailer>(`/games/${id}/movies`);
  console.log(trailerAPI.endpoint);
  const fetchTrailer = () => {
    return trailerAPI.getAll();
  };
  return useQuery({
    queryKey: ["games", id, "trailers"],
    queryFn: fetchTrailer,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGameTrailers;
