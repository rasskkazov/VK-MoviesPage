import { posterContentUI } from "../../lib/posterContentUI";
import { TMovie } from "../../types/type";

import * as classes from "./Card.module.scss";

import { Card, Div, Popover, Text, Title } from "@vkontakte/vkui";

export const MovieCard = (props: { movieData: TMovie }) => {
  const posterContent = posterContentUI(props.movieData, {
    imgClassName: classes.movie__poster,
    altDivClassname: classes.movie__altImage,
  });

  return (
    <Popover
      trigger="hover"
      placement="auto"
      role="banner"
      aria-describedby="tooltip-1"
      content={
        <Div>
          <Text>{props.movieData.name || props.movieData.alternativeName}</Text>
        </Div>
      }
    >
      <div className={classes.movie}>
        <Card className={classes.movie__card} mode="shadow">
          <div className={classes.movie__posterContainer}>{posterContent}</div>
        </Card>
        <div className={classes.movie__info}>
          <Text>Оценка: {props.movieData.rating.imdb}</Text>
          <Text>{props.movieData.year}</Text>
        </div>
      </div>
    </Popover>
  );
};
