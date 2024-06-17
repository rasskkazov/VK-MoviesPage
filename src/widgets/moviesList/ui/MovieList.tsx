import { CardGrid, Pagination, ScreenSpinner } from "@vkontakte/vkui";
import { useMovieList } from "../model/useMovieList";
import { MovieCard } from "@/entities";

import * as classes from "./MovieList.module.scss";

export const MovieList = () => {
  const { data, isLoading, handlePageClick, error } = useMovieList(50);

  console.log("MY AEREROOR OID", error);

  return (
    <div className={classes.movieList}>
      {isLoading && <ScreenSpinner state="loading" />}
      {/* {error && (
        <ScreenSpinner state="error" title={error.message}>
          {error.message}
        </ScreenSpinner>
      )} */}
      {!isLoading && !error && (
        <>
          <CardGrid size="l" className={classes.movieList__grid}>
            {data.docs.map((movie) => (
              <MovieCard
                key={movie.id}
                name={movie.name || movie.alternativeName}
                rating={movie.rating}
                year={movie.year}
                poster={movie.poster}
              />
            ))}
          </CardGrid>
          <Pagination
            className={classes.movieList__pagination}
            navigationButtonsStyle="icon"
            currentPage={data.page}
            boundaryCount={1}
            totalPages={data.pages}
            onChange={handlePageClick}
          />
        </>
      )}
    </div>
  );
};
