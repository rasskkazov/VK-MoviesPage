import { useEffect, useState } from "react";
import { fetchGenreData } from "./fetchGenreData";
import { useLocation, useSearchParams } from "react-router-dom";
import { QUERIES, UpdateFiltersAction } from "@/shared/types/api";

import { TSelectOptions } from "@/shared/types/selectOptions";
import qs from "qs";

export const useGenreFilter = (
  dispatch: React.Dispatch<UpdateFiltersAction>
) => {
  // УДАЛИТЬ НИЖЕ
  const genresOptions1: TSelectOptions = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
  ];
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
        // УДАЛИТЬ НИЖЕ
        setGenresOptions(genresOptions1);
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
