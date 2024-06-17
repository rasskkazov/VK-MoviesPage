import { useEffect, useState } from "react";
import { fetchGenreData } from "./fetchGenreData";
import { UpdateFiltersAction } from "@/shared/types/api";

import { TSelectOptions } from "@/shared/types/selectOptions";
import { error } from "console";

export const useGenreFilter = (
  dispatch: React.Dispatch<UpdateFiltersAction>
) => {
  const [genresOptions, setGenresOptions] = useState<TSelectOptions>([]);

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

  const [selectedGenres, setSelectedGenres] = useState<TSelectOptions>([]);
  const onSelect = (newSelectedGenres: TSelectOptions) => {
    setSelectedGenres(newSelectedGenres);
    dispatch({
      type: "UPDATE_GENRES",
      payload: newSelectedGenres.map((genre) => genre.value),
    });
  };
  return { selectedGenres, genresOptions, onSelect };
};
