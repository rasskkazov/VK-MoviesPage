import { TMovie } from "../types/type";

import * as classes from "./Movie.module.scss";

import { Card, Div, Text } from "@vkontakte/vkui";

export const Movie = (
  props: Pick<TMovie, "name" | "year" | "poster" | "rating">
) => {
  return (
    <div className={classes.movie} title={props.name}>
      <Card className={classes.movie__card} mode="shadow">
        <Div
          style={{ padding: "0" }}
          className={classes.movie__posterContainer}
        >
          <img
            className={classes.movie__poster}
            src={props.poster}
            alt={props.name}
          />
        </Div>
      </Card>
      <Div
        style={{
          paddingTop: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Оценка: {props.rating}</Text>
        <Text>{props.year}</Text>
      </Div>
    </div>
  );
};
