import { NavListDesk } from "./NavListDesk";
import { NavListMob } from "./NavListMob";

import * as classes from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <NavListDesk />
      <NavListMob />
    </nav>
  );
};
