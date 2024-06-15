import { CardGrid, ScreenSpinner } from "@vkontakte/vkui";
import { useMovieList } from "../model/useMovieList";
import { MovieCard } from "@/entities";

import * as classes from "./MovieList.module.scss";

export const MovieList = () => {
  // const { data, isLoading } = useMovieList(50);

  const isLoading = false;
  const data = {
    docs: [
      {
        id: 1,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
      {
        id: 2,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
      {
        id: 3,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
      {
        id: 4,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
      {
        id: 5,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
      {
        id: 6,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
      {
        id: 7,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
      {
        id: 8,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
      {
        id: 9,
        name: "Bogdan",
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
        alternativeName: "Rasskazov",
        year: 2003,
        poster: {
          url: "",
          previewUrl: "",
        },
      },
    ],
  };

  return (
    <div className={classes.movieList}>
      {isLoading && <ScreenSpinner state="loading" />}
      {!isLoading && (
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
      )}
    </div>
  );
};
