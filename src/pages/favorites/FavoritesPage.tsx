import { Link } from "react-router-dom";
import { CardGrid, Title } from "@vkontakte/vkui";

import { favoriteMovieStorage } from "@/features/addFavovites/model/favoriteStorage";
import { MovieCard } from "@/entities";
import { paths } from "@/shared/constant/paths";
import * as classes from "./FavoritesPage.module.scss";

export const Favorites = () => {
  const data = favoriteMovieStorage.getFavorites();
  return (
    <div className={classes.favorite}>
      {!data.length && <Title>Пока что тут ничего нет</Title>}
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
