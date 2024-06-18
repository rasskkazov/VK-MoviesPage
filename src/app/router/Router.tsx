import { createBrowserRouter } from "react-router-dom";

import { Root, ErrorPage, Movies, Favorites, Main, Movie } from "@/pages";
import { paths } from "@/shared/constant/paths";

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
      },
      {
        path: paths.FAVORITES,
        element: <Favorites />,
      },
      {
        path: `${paths.MOVIES}/:movieId`,
        element: <Movie />,
        errorElement: <ErrorPage />,
      },
      {
        path: paths.ERROR,
        element: <ErrorPage />,
      },
    ],
  },
]);
