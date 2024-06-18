import { useParams } from "react-router-dom";
import { useMoviePage } from "../model/useMoviePage";

import { MoviePageview } from "@/entities";

export const Movie = () => {
  const { movieId } = useParams();
  const { movieData, isLoading } = useMoviePage(Number(movieId));

  return (
    <>
      {isLoading && <div>Зарузка ...</div>}
      {!isLoading && <MoviePageview movieData={movieData} />}
    </>
  );
};
