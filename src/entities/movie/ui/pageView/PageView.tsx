import { TMovie } from "../../types/type";
import { posterContentUI } from "../../lib/posterContentUI";

import * as classes from "./PageView.module.scss";
import * as subClasses from "./subinfo.module.scss";
import * as cardClasses from "../card/Card.module.scss";
import { ChipsInput } from "@vkontakte/vkui";
import { genreMapper } from "../../api/genreMapper";

export const MoviePageview = (props: { movieData: TMovie }) => {
  const posterContent = posterContentUI(props.movieData, {
    imgClassName: cardClasses.movie__poster,
    altDivClassname: cardClasses.movie__altImage,
  });

  console.log(props.movieData.genres);

  return (
    <div className={classes.movie}>
      <div className={cardClasses.movie__posterContainer}>{posterContent}</div>
      <div className={classes.movie__info}>
        <div className={classes.movie__title}>{props.movieData.name}</div>
        <div className={classes.movie__description}>
          {props.movieData.description}
        </div>
      </div>
      <div className={`${classes.movie__subinfo} ${subClasses.subinfo}`}>
        <div className={subClasses.subinfo__top}>
          {props.movieData.year}
          <div className="addToFavorites">To fav</div>
        </div>
        <div className={subClasses.subinfo__bot}>
          <ChipsInput
            id="genres"
            value={genreMapper(props.movieData.genres)}
            placeholder="Жанры"
            disabled
          />
        </div>
      </div>
    </div>
  );
};
