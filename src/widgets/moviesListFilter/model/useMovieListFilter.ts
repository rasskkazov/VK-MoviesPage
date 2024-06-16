import { useReducer } from "react";
import { UpdateFiltersAction } from "@/features";
import { TSelectOptions } from "@/shared/types/selectOptions";

type TMoviesListFilterState = {
  genres: TSelectOptions;
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

  console.log(filterState);

  return { dispatch };
};
