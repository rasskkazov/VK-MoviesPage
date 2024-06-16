import { useEffect, useState } from "react";
import { TGenres, fetchGenreData } from "./fetchGenreData";

export const useGenreFilter = () => {
  const [isLoading, setIsloading] = useState(true);
  const [genres, setGenres] = useState<TGenres>(null);

  useEffect(() => {
    fetchGenreData().then((res) => {
      setGenres(res);
      setIsloading(false);
    });
  }, []);
  return { genres, isLoading };
};
