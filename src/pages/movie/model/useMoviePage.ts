import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovie } from "../api/fetchMovie";

import { TMovie } from "@/entities";
import { paths } from "@/shared/constant/paths";

export const useMoviePage = (id: number) => {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState<Error>(null);
  const [movieData, setMovieData] = useState<TMovie>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(id)
      .then((res) => {
        setMovieData(res);
      })
      .catch((error) => {
        navigate(`/${paths.ERROR}`);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  return { movieData, isLoading };
};
