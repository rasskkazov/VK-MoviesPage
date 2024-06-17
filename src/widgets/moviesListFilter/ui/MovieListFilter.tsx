import { GenreFilter, RatingFilter, YearFilter } from "@/features";

import { Button, FormItem } from "@vkontakte/vkui";
import { useMovieListFilter } from "../model/useMovieListFilter";

export const MovieListFilter = () => {
  const { dispatch, submit } = useMovieListFilter();

  return (
    <form onSubmit={submit}>
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
