import { useEffect, useState } from "react";
import { fetchMovie } from "../api/fetchMovie";
import { TMovie } from "@/entities";
import { useNavigate } from "react-router-dom";
import { paths } from "@/shared/constant/paths";

export const useMoviePage = (id: number) => {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState<Error>(null);
  const [movieData, setMovieData] = useState<TMovie>(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   fetch("https://65646c94ceac41c0761e28ba.mockapi.io/movie")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setMovieData(res[0]);
  //       setIsloading(false);
  //     });
  // }, []);

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
