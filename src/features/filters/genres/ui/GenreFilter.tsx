import React, { useState } from "react";
import { FormItem, ChipsSelect } from "@vkontakte/vkui";
import { UpdateFiltersAction } from "../../model/types";
import { useGenreFilter } from "../model/useGenreFilter";

import { TSelectOptions } from "@/shared/types/selectOptions";

export const GenreFilter = ({
  dispatch,
}: {
  dispatch: React.Dispatch<UpdateFiltersAction>;
}) => {
  const { genres, isLoading } = useGenreFilter();

  // const isLoading = true;
  // const genres: any[] = [];

  const [selectedGenres, setSelectedGenres] = useState<TSelectOptions>([]);
  const onSelect = (newSelectedGenres: TSelectOptions) => {
    setSelectedGenres(newSelectedGenres);
    dispatch({ type: "UPDATE_GENRES", payload: newSelectedGenres });
  };

  const options: TSelectOptions = isLoading
    ? []
    : genres.map((genre) => ({
        value: genre.slug,
        label: genre.name,
      }));

  return (
    <>
      <FormItem htmlFor="genres" top="Жанры">
        <ChipsSelect
          id="genres"
          value={selectedGenres}
          onChange={onSelect}
          options={options}
          placeholder="Не выбраны"
          emptyText="Загрузка жанров..."
        />
      </FormItem>
    </>
  );
};
