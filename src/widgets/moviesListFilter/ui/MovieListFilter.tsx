import { FormEvent } from "react";
import { GenreFilter, RatingFilter, YearFilter } from "@/features";

import { Button, FormItem } from "@vkontakte/vkui";
import { useMovieListFilter } from "../model/useMovieListFilter";

const submit = (e: FormEvent) => {
  e.preventDefault();
  console.log("Submti");
};

export const MovieListFilter = () => {
  const { dispatch } = useMovieListFilter();

  return (
    <form onSubmit={(e) => submit(e)}>
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
