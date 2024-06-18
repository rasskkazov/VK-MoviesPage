import { Button, FormItem } from "@vkontakte/vkui";
import { useMovieListFilter } from "../model/useMovieListFilter";

import { GenreFilter, RatingFilter, YearFilter } from "@/features";

export const MovieListFilter = (options: { modalBack?: VoidFunction }) => {
  const { dispatch, submit } = useMovieListFilter();

  return (
    <form
      onSubmit={(e) => {
        submit(e);
        if (options.modalBack) options.modalBack();
      }}
    >
      <GenreFilter dispatch={dispatch} />
      <YearFilter dispatch={dispatch} />
      <RatingFilter dispatch={dispatch} />
      <FormItem>
        <Button size="l" stretched type="submit">
          Применить
        </Button>
      </FormItem>
    </form>
  );
};
