import { Link } from "react-router-dom";
import { paths } from "@/shared/constant/paths";

import * as classes from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link to={paths.MOVIES}>Главная</Link>
        </li>
        <li>
          <Link to={paths.FAVORITES}>Избранное</Link>
        </li>
      </ul>
    </nav>
  );
};
