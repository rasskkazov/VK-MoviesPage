import { useEffect, useState } from "react";
import { fetchGenreData } from "../api/fetchGenreData";
import { filterQueryStorage } from "./FilterQueryStorage";

import { genreMapper } from "@/entities";
import { TSelectOptions } from "@/shared/types/selectOptions";
import { QUERIES } from "@/shared/types/api";

export const useGenreFilter = () => {
  const [genreOptions, setGenresOptions] = useState<TSelectOptions>([]);
  const [selectedGenres, setSelectedGenres] = useState<TSelectOptions>([]);

  useEffect(() => {
    fetchGenreData()
      .then((res) => {
        setGenresOptions(genreMapper(res));
      })
      .catch((error) => {
        console.error(error.message);
      });

    // заполнить фильтры при переходе по URL с фильтрами
    const queryGenres = filterQueryStorage.getQueryParameter(QUERIES.genres);
    let select: TSelectOptions = [];
    if (typeof queryGenres === "string") {
      select = [{ label: queryGenres, value: queryGenres }];
    } else if (Array.isArray(queryGenres)) {
      select = queryGenres.map((queryGenre) => ({
        label: queryGenre as string,
        value: queryGenre as string,
      }));
    }

    setSelectedGenres(select);
  }, []);

  const onSelect = (newSelectedGenres: TSelectOptions) => {
    setSelectedGenres(newSelectedGenres);

    filterQueryStorage.setQueryParameter(
      QUERIES.genres,
      newSelectedGenres.map((genreOption) => genreOption.label)
    );
  };

  return { selectedGenres, genreOptions, onSelect };
};
