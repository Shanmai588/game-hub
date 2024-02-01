import { useEffect, useState } from "react";
import apiClient from "../services/api.client";
import { CanceledError } from "axios";
interface FetchGenresRespones {
    count: number;
    results: Genres[];
}
interface Genres {
    id : number;
    name: string;
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresRespones>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);

      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);

      })

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;