import React from "react";
import { FormItem, ChipsSelect } from "@vkontakte/vkui";
import { useGenreFilter } from "../model/useGenreFilter";

import { UpdateFiltersAction } from "@/shared/types/api";

export const GenreFilter = ({
  dispatch,
}: {
  dispatch: React.Dispatch<UpdateFiltersAction>;
}) => {
  const { selectedGenres, genresOptions, onSelect } = useGenreFilter(dispatch);

  // const isLoading = true;
  // const genres: any[] = [];

  return (
    <>
      <FormItem htmlFor="genres" top="Жанры">
        <ChipsSelect
          id="genres"
          value={selectedGenres}
          onChange={onSelect}
          options={genresOptions}
          placeholder="Не выбраны"
          emptyText="Загрузка жанров..."
        />
      </FormItem>
    </>
  );
};
