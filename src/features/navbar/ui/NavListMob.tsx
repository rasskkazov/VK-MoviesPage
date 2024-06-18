import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Footnote, IconButton } from "@vkontakte/vkui";
import { Icon24LogoVkVideoOutline, Icon24StarsOutline } from "@vkontakte/icons";

import { paths } from "@/shared/constant/paths";

import * as classes from "./NavBar.module.scss";

export const NavListMob = () => {
  const li = (path: string, caption: string, icon: ReactNode) => (
    <li>
      <Link to={path} className={classes.navbar__el_mob}>
        <button className={classes.navbar__btn_mob}>{icon}</button>
        <Footnote weight="2">{caption}</Footnote>
      </Link>
    </li>
  );

  return (
    <ul className={`${classes.navbar__list_mob} ${classes.navbar__list}`}>
      {li(paths.MOVIES, "Главная", <Icon24LogoVkVideoOutline />)}
      {li(paths.FAVORITES, "Избранное", <Icon24StarsOutline />)}
    </ul>
  );
};
