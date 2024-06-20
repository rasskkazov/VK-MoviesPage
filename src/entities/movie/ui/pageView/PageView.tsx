import { ReactNode } from "react";
import { ChipsInput, Text, Paragraph } from "@vkontakte/vkui";
import { TMovie } from "../../types/type";
import { genreMapper } from "../../api/genreMapper";
import { posterContentUI } from "../../lib/posterContentUI";

import * as classes from "./PageView.module.scss";
import * as cardClasses from "../card/Card.module.scss";

export const MoviePageview = (props: {
  movieData: TMovie;
  featureSlot?: { caption: string; element: ReactNode };
}) => {
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

      <div className={classes.movie__featureSlot}>
        {props.featureSlot && (
          <>
            <Paragraph weight="3">{props.featureSlot.caption || ""}</Paragraph>
            {props.featureSlot.element}
          </>
        )}
      </div>
      <div className={classes.movie__rating}>
        <h1>{props.movieData.rating.imdb}</h1>
        &nbsp; &nbsp;
        <span>на IMDB</span>
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
