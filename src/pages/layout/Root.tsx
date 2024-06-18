import { Outlet } from "react-router-dom";
import { Header } from "@/widgets";

import * as classes from "./Root.module.scss";
export const Root = () => {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
