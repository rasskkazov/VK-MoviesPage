import { createBrowserRouter } from "react-router-dom";

import { Root, ErrorPage, Movies, Favorites, Main } from "@/pages";
import { MovieList } from "@/widgets";
import { paths } from "@/shared/constant/paths";
import path from "path";

export const router = createBrowserRouter([
  {
    path: paths.MAIN,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.MAIN,
        element: <Main />,
      },
      {
        path: paths.MOVIES,
        element: <Movies />,
        children: [
          {
            path: "",
            element: <MovieList />,
          },
          {
            path: `${paths.PAGE}/:pageNumber`,
            element: <MovieList />,
          },
        ],
      },

      {
        path: paths.FAVORITES,
        element: <Favorites />,
      },
    ],
  },
]);
