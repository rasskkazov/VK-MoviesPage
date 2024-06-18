import { Outlet } from "react-router-dom";

import * as classes from "./Movies.module.scss";

import { SplitCol, SplitLayout } from "@vkontakte/vkui";
import { MovieList, MovieListFilter } from "@/widgets";

export const Movies = () => {
  return (
    <div className={classes.movies}>
      <SplitLayout center>
        <SplitCol maxWidth="24rem" className={classes.movies__sidebar}>
          <MovieListFilter />
        </SplitCol>
        <SplitCol maxWidth="140rem">
          <MovieList />
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
