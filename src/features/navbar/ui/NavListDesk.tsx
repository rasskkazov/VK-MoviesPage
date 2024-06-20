import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@vkontakte/vkui";
import { Icon24LogoVkVideoOutline, Icon24StarsOutline } from "@vkontakte/icons";

import { paths } from "@/shared/constant/paths";
import * as classes from "./NavBar.module.scss";

export const NavListDesk = () => {
  const li = (path: string, caption: string, icon: ReactNode) => (
    <li>
      <Link to={path}>
        <Button
          onClick={() => {}}
          size="l"
          appearance="accent"
          mode="tertiary"
          before={icon}
        >
          {caption}
        </Button>
      </Link>
    </li>
  );

  return (
    <ul className={`${classes.navbar__list_desk} ${classes.navbar__list}`}>
      {li(paths.MOVIES, "Главная", <Icon24LogoVkVideoOutline />)}
      {li(paths.FAVORITES, "Избранное", <Icon24StarsOutline />)}
    </ul>
  );
};
