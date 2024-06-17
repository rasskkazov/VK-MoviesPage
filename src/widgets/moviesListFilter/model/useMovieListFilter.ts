import { FormEvent, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import qs from "qs";

import { QUERIES, UpdateFiltersAction } from "@/shared/types/api";

type TMoviesListFilterState = {
  [QUERIES.genres]: string[];
  [QUERIES.decade]: string | null;
  [QUERIES.year]: string | null;
  [QUERIES.rating]: string | null;
};

const reducer = (
  state: TMoviesListFilterState,
  action: UpdateFiltersAction
) => {
  switch (action.type) {
    case "UPDATE_GENRES":
      return { ...state, [QUERIES.genres]: action.payload };
    case "UPDATE_DECADE":
      return { ...state, [QUERIES.decade]: action.payload };
    case "UPDATE_YEAR":
      return { ...state, [QUERIES.year]: action.payload };
    case "UPDATE_RATING":
      return { ...state, [QUERIES.rating]: action.payload };
  }
};

export const useMovieListFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterState, dispatch] = useReducer(reducer, {
    [QUERIES.genres]: [],
    [QUERIES.decade]: null,
    [QUERIES.year]: null,
    [QUERIES.rating]: null,
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();

    setSearchParams(
      qs.stringify(filterState, {
        arrayFormat: "repeat",
        skipNulls: true,
        addQueryPrefix: false,
      })
    );
  };

  return { dispatch, submit };
};
