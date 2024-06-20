import { observer } from "mobx-react";
import { Button, FormItem } from "@vkontakte/vkui";
import { useMovieListFilter } from "../model/useMovieListFilter";

import {
  GenreFilter,
  RatingFilter,
  YearFilter,
  filterQueryStorage,
} from "@/features";
import { FormEvent } from "react";

export const MovieListFilter = observer(
  (options: { modalBack?: VoidFunction }) => {
    const { submit } = useMovieListFilter();

    return (
      <form
        onSubmit={(e) => {
          submit(e);
          if (options.modalBack) options.modalBack();
        }}
      >
        <GenreFilter />
        <YearFilter />
        <RatingFilter />
        <FormItem>
          <Button size="l" stretched type="submit">
            Применить
          </Button>
        </FormItem>
      </form>
    );
  }
);
