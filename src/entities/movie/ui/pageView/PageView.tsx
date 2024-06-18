import { ChipsInput, Title, Text, Paragraph } from "@vkontakte/vkui";
import { TMovie } from "../../types/type";
import { genreMapper } from "../../api/genreMapper";
import { posterContentUI } from "../../lib/posterContentUI";

import * as classes from "./PageView.module.scss";
import * as cardClasses from "../card/Card.module.scss";

export const MoviePageview = (props: { movieData: TMovie }) => {
  const posterContent = posterContentUI(props.movieData, {
    imgClassName: cardClasses.movie__poster,
    altDivClassname: cardClasses.movie__altImage,
  });

  return (
    <div className={classes.movie}>
      <div
        className={`${cardClasses.movie__posterContainer} ${classes.movie__poster}`}
      >
        {posterContent}
      </div>

      <div className={classes.movie__title}>
        <h1>{props.movieData.name || props.movieData.alternativeName}</h1>
        &nbsp; &nbsp;
        <span>{props.movieData.year}</span>
      </div>

      <div className={classes.movie__description}>
        <Text>{props.movieData.description}</Text>
      </div>

      <div className={classes.movie__toFav}>
        <Paragraph weight="3">В избранное</Paragraph>
        <div className="addToFavorites">To fav</div>
      </div>

      <div className={classes.movie__genres}>
        <ChipsInput
          id="genres"
          value={genreMapper(props.movieData.genres)}
          placeholder="Жанры"
          disabled
        />
      </div>
    </div>
  );
};
