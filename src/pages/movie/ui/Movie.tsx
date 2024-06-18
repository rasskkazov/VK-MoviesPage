import { useParams } from "react-router-dom";
import { ScreenSpinner } from "@vkontakte/vkui";
import { useMoviePage } from "../model/useMoviePage";

import { MoviePageview } from "@/entities";

export const Movie = () => {
  const { movieId } = useParams();
  const { movieData, isLoading } = useMoviePage(Number(movieId));

  return (
    <>
      {isLoading && <ScreenSpinner></ScreenSpinner>}
      {!isLoading && <MoviePageview movieData={movieData} />}
    </>
  );
};
