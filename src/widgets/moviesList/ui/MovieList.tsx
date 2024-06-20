import { Link } from "react-router-dom";
import { CardGrid, Pagination, ScreenSpinner, Title } from "@vkontakte/vkui";
import { useMovieList } from "../model/useMovieList";

import { MovieCard } from "@/entities";
import * as classes from "./MovieList.module.scss";
import { observer } from "mobx-react";
import { filterQueryStorage } from "@/features";

export const MovieList = observer(() => {
  const { data, isLoading, handlePageClick, error } = useMovieList(50);

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
          <CardGrid
            size="l"
            className={classes.movieList__grid}
            style={{ justifyContent: "center" }}
          >
            {data.docs.map((movie) => (
              <Link to={movie.id.toString()} key={movie.id}>
                <MovieCard movieData={movie} />
              </Link>
            ))}
          </CardGrid>
          {data.docs.length > 1 && (
            <Pagination
              className={classes.movieList__pagination}
              navigationButtonsStyle="icon"
              currentPage={data.page}
              boundaryCount={1}
              totalPages={data.pages}
              onChange={handlePageClick}
            />
          )}
          {data.docs.length < 1 && (
            <Title style={{ textAlign: "center", color: "gray" }}>
              По вашему запросу ничего не найдено
            </Title>
          )}
        </>
      )}
    </div>
  );
});
