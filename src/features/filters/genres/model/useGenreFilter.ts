import { useEffect, useState } from "react";
import { fetchGenreData } from "./fetchGenreData";
import { UpdateFiltersAction } from "../../model/types";

import { TSelectOptions } from "@/shared/types/selectOptions";

export const useGenreFilter = (
  dispatch: React.Dispatch<UpdateFiltersAction>
) => {
  const [genresOptions, setGenresOptions] = useState<TSelectOptions>([]);

  useEffect(() => {
    fetchGenreData().then((res) => {
      setGenresOptions(
        res.map((genre) => ({
          value: genre.slug,
          label: genre.name,
        }))
      );
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
