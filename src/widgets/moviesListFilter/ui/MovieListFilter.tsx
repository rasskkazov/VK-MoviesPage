import { observer } from "mobx-react";
import { Button, FormItem } from "@vkontakte/vkui";
import { useMovieListFilter } from "../model/useMovieListFilter";

import { GenreFilter, RatingFilter, YearFilter } from "@/features";

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
