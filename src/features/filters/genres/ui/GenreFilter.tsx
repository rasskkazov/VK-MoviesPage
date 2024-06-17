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
