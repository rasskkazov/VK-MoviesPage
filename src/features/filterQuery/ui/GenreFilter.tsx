import { observer } from "mobx-react";
import { FormItem, ChipsSelect } from "@vkontakte/vkui";
import { useGenreFilter } from "../model/useGenreFilter";

export const GenreFilter = observer(() => {
  const { selectedGenres, genreOptions, onSelect } = useGenreFilter();

  return (
    <FormItem htmlFor="genres" top="Жанры">
      <ChipsSelect
        id="genres"
        value={selectedGenres}
        onChange={onSelect}
        options={genreOptions}
        placeholder="Не выбраны"
        emptyText="Загрузка жанров..."
      />
    </FormItem>
  );
});
