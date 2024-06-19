import { Link } from "react-router-dom";
import { CardGrid } from "@vkontakte/vkui";

import { favoriteMovieStorage } from "@/features/addFavovites/model/favoriteStorage";
import { MovieCard } from "@/entities";
import * as classes from "./FavoritesPage.module.scss";
import { paths } from "@/shared/constant/paths";

export const Favorites = () => {
  const data = favoriteMovieStorage.getFavorites();
  return (
    <div className={classes.favorite}>
      <CardGrid
        size="l"
        style={{ justifyContent: "center" }}
        className={classes.favorite__grid}
      >
        {data.map((movie) => (
          <Link to={`/${paths.MOVIES}/${movie.id.toString()}`} key={movie.id}>
            <MovieCard movieData={movie} />
          </Link>
        ))}
      </CardGrid>
    </div>
  );
};
