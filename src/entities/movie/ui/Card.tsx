import { TMovie } from "../types/type";

import * as classes from "./Card.module.scss";

import { Card, Div, Popover, Text, Title } from "@vkontakte/vkui";

export const MovieCard = (
  props: Pick<TMovie, "name" | "year" | "poster" | "rating">
) => {
  const posterContent = (function () {
    if (props.poster && props.poster.previewUrl) {
      return (
        <img
          className={classes.movie__poster}
          src={props.poster.previewUrl}
          alt={props.name}
        />
      );
    }

    return (
      <div className={classes.movie__altImage}>
        <Title level="3">{props.name}</Title>
      </div>
    );
  })();

  return (
    <Popover
      trigger="hover"
      placement="auto"
      role="banner"
      aria-describedby="tooltip-1"
      content={
        <Div>
          <Text>{props.name}</Text>
        </Div>
      }
    >
      <div className={classes.movie}>
        <Card className={classes.movie__card} mode="shadow">
          <div className={classes.movie__posterContainer}>{posterContent}</div>
        </Card>
        <div className={classes.movie__info}>
          <Text>Оценка: {props.rating.imdb}</Text>
          <Text>{props.year}</Text>
        </div>
      </div>
    </Popover>
  );
};
