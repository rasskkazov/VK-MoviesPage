import { CardGrid, Pagination, ScreenSpinner } from "@vkontakte/vkui";
import { useMovieList } from "../model/useMovieList";
import { MovieCard } from "@/entities";

import { useNavigate, redirect } from "react-router-dom";

import * as classes from "./MovieList.module.scss";
import { paths } from "@/shared/constant/paths";
import { useState } from "react";

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

export const MovieList = () => {
  // const { data, isLoading, handlePageClick } = useMovieList(50);
  const [curPage, setCurPage] = useState(1);

  const navigate = useNavigate();
  const handleChange = (newPage: number) => {
    setCurPage(newPage);
    console.log("loololo");

    navigate(`${paths.PAGE}/${curPage}`, { replace: true });
  };

  return (
    <div className={classes.movieList}>
      {isLoading && <ScreenSpinner state="loading" />}
      {!isLoading && (
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
            currentPage={curPage}
            boundaryCount={1}
            totalPages={10}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};
