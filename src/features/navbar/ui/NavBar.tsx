import { NavListDesk } from "./NavListDesk";

import * as classes from "./NavBar.module.scss";
import { NavListMob } from "./NavListMob";

export const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <NavListDesk />
      <NavListMob />
    </nav>
  );
};
