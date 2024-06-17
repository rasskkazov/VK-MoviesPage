import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviePage } from "./fetchMoviePage";

import { PaginationResponse } from "@/shared/types/api";
import { TMovie } from "@/entities";
import qs from "qs";
import { prepareParams } from "../lib/prepareParams";

export const useMovieList = (limit: number) => {
  const location = useLocation();

  const queryString = location.search;
  const params = prepareParams(
    qs.parse(queryString, { ignoreQueryPrefix: true })
  );

  const handlePageClick = (newPage: number) => {};

  const { data, isLoading, error } = useQuery<PaginationResponse<TMovie>>({
    queryKey: ["page", params],
    queryFn: ({ signal }) =>
      fetchMoviePage(
        {
          params,
        },
        signal
      ),
  });
  if (error) console.warn(error.message);

  return { data, isLoading, handlePageClick, error };
};
