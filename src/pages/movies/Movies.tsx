import { Outlet } from "react-router-dom";

import { API_TOKEN } from "@/shared/api/token";

export const Movies = () => {
  console.log(API_TOKEN);

  return (
    <div className="main">
      <div className="filters">Filters</div>
      <div className="list">
        <Outlet />
      </div>
    </div>
  );
};
