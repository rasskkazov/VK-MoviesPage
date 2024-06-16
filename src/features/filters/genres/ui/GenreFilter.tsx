import { useState } from "react";

import { useGenreFilter } from "../model/useCheckboxFilter";
import { FormItem, ChipsSelect } from "@vkontakte/vkui";
import { TSelectOptions } from "@/shared/types/selectOptions";

export const GenreFilter = () => {
  const { genres, isLoading } = useGenreFilter();

  const [selectedGenres, setSelectedGenres] = useState<TSelectOptions>([]);

  // const isLoading = true;
  // const genres: any[] = [];

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
          onChange={setSelectedGenres}
          options={options}
          placeholder="Жанры не выбраны"
          emptyText="Загрузка жанров..."
        />
      </FormItem>
    </>
  );
};
