import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";
import { fetchGenreData } from "./fetchGenreData";

import { TSelectOptions } from "@/shared/types/selectOptions";
import { QUERIES, UpdateFiltersAction } from "@/shared/types/api";

export const useGenreFilter = (
  dispatch: React.Dispatch<UpdateFiltersAction>
) => {
  const [genresOptions, setGenresOptions] = useState<TSelectOptions>([]);
  const [selectedGenres, setSelectedGenres] = useState<TSelectOptions>([]);
  const location = useLocation();

  useEffect(() => {
    fetchGenreData()
      .then((res) => {
        setGenresOptions(
          res.map((genre) => ({
            value: genre.slug,
            label: genre.name,
          }))
        );
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const onSelect = (newSelectedGenres: TSelectOptions) => {
    setSelectedGenres(newSelectedGenres);
    dispatch({
      type: "UPDATE_GENRES",
      payload: newSelectedGenres.map((genre) => genre.label),
    });
  };

  useEffect(() => {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    let queryGenresRaw = params[QUERIES.genres] as string[];
    if (typeof queryGenresRaw === "string") queryGenresRaw = [queryGenresRaw];
    else if (!(queryGenresRaw instanceof Array)) queryGenresRaw = [];

    const queryGenres = genresOptions.filter((option) => {
      return queryGenresRaw.some((queryGenre) => queryGenre === option.label);
    });

    onSelect(queryGenres);
  }, [genresOptions, location]);

  return { selectedGenres, genresOptions, onSelect };
};
