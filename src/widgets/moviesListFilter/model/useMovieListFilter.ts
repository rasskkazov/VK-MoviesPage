import { FormEvent, useReducer } from "react";
import { UpdateFiltersAction } from "@/features";

type TMoviesListFilterState = {
  genres: string[];
  year: string;
  rating: string;
};

export const useMovieListFilter = () => {
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

  const [filterState, dispatch] = useReducer(reducer, {
    genres: [],
    year: "",
    rating: "",
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submti");
  };

  console.log(filterState);
  return { dispatch, submit };
};
