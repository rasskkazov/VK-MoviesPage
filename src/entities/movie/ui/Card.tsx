import { TMovie } from "../types/type";

import * as classes from "./Card.module.scss";

import { Card, Text } from "@vkontakte/vkui";

export const MovieCard = (
  props: Pick<TMovie, "name" | "year" | "poster" | "rating">
) => {
  return (
    <div className={classes.movie} title={props.name}>
      <Card className={classes.movie__card} mode="shadow">
        <div className={classes.movie__posterContainer}>
          <img
            className={classes.movie__poster}
            src={props.poster}
            alt={props.name}
          />
        </div>
      </Card>
      <div className={classes.movie__info}>
        <Text>Оценка: {props.rating}</Text>
        <Text>{props.year}</Text>
      </div>
    </div>
  );
};
