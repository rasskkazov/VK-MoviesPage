import { Icon24Favorite, Icon24FavoriteOutline } from "@vkontakte/icons";

import { TMovie } from "@/entities";
import { Button } from "@vkontakte/vkui";
import { favoriteMovieStorage } from "../model/favoriteStorage";
import { useState } from "react";

export const AddFavorites = (props: { movieData: TMovie }) => {
  const [isFavorite, setIsfavorite] = useState(
    favoriteMovieStorage.isMovieFavorite(props.movieData.id)
  );

  const icon = isFavorite ? <Icon24Favorite /> : <Icon24FavoriteOutline />;

  const handleClick = () => {
    if (!isFavorite) {
      favoriteMovieStorage.addFavoriteMovie(props.movieData);
      setIsfavorite(true);
    } else {
      favoriteMovieStorage.removeFavoriteMovie(props.movieData.id);
      setIsfavorite(false);
    }
  };

  return (
    <Button
      onClick={() => {
        handleClick();
      }}
      size="l"
      appearance="accent"
      mode="tertiary"
      before={icon}
    ></Button>
  );
};
