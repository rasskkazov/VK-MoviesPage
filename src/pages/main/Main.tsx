import { Navigate } from "react-router-dom";

import { paths } from "@/shared/constant/paths";

export const Main = () => {
  return <Navigate to={paths.MOVIES} />;
};
