import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviePage } from "./fetchMoviePage";
import { prepareParams } from "../lib/prepareParams";

import { TMovie } from "@/entities";
import { PaginationResponse, QUERIES } from "@/shared/types/api";
import { useQueryParams } from "@/shared/lib/useQueryParams";

export const useMovieList = (limit: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = useQueryParams();

  const handlePageClick = (newPage: number) => {
    const newQuery = qs.stringify(
      { ...queryString, [QUERIES.page]: newPage, [QUERIES.limit]: limit },
      {
        arrayFormat: "repeat",
        skipNulls: true,
        addQueryPrefix: false,
      }
    );

    setSearchParams(newQuery);
  };

  //go to 1-st page when open link without page specify
  useEffect(() => {
    if (!queryString[QUERIES.page]) handlePageClick(1);
  }, []);

  // make years from decades for API
  const params = prepareParams(queryString);

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
