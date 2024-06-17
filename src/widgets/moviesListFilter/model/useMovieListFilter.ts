import { FormEvent, useReducer } from "react";
import { useSearchParams } from "react-router-dom";

import { KinopQueries } from "@/shared/types/api";
import { UpdateFiltersAction } from "@/shared/types/api";

type TMoviesListFilterState = {
  genres: string[];
  year: string;
  rating: string;
};

const reducer = (
  state: TMoviesListFilterState,
  action: UpdateFiltersAction
) => {
  switch (action.type) {
    case "UPDATE_GENRES":
      return { ...state, genres: action.payload };
    case "UPDATE_YEAR":
      return { ...state, year: action.payload };
    case "UPDATE_RATING":
      return { ...state, rating: action.payload };
  }
};

export const useMovieListFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterState, dispatch] = useReducer(reducer, {
    genres: [],
    year: "",
    rating: "",
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();

    searchParams.set(KinopQueries.page, "1");
    searchParams.set(KinopQueries.genres, filterState.genres.join(","));
    searchParams.set(KinopQueries.year, filterState.year);
    searchParams.set(KinopQueries.rating, filterState.rating);

    Object.entries(filterState).forEach(([key, value]) => {
      if (!value.length)
        searchParams.delete(KinopQueries[key as keyof typeof KinopQueries]);
    });

    if (filterState.rating === "0-10") searchParams.delete(KinopQueries.rating);

    setSearchParams(searchParams);
  };

  return { dispatch, submit };
};
