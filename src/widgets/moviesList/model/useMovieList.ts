import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviePage } from "./fetchMoviePage";
import { prepareParams } from "../lib/prepareParams";

import { filterQueryStorage } from "@/features";
import { TMovie } from "@/entities";
import { PaginationResponse, QUERIES } from "@/shared/types/api";

export const useMovieList = (limit: number) => {
  const queryString = useLocation().search;
  filterQueryStorage.setQuery(queryString);
  const params = filterQueryStorage.getQueryObject();

  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageClick = (newPage: number) => {
    filterQueryStorage.setQueryParameter(QUERIES.page, newPage.toString());
    filterQueryStorage.setQueryParameter(QUERIES.limit, limit.toString());

    const newURL = new URLSearchParams(filterQueryStorage.getQueryString());
    setSearchParams(newURL);
  };

  useEffect(() => {
    if (!filterQueryStorage.getQueryParameter(QUERIES.page)) {
      handlePageClick(1);
    }
  }, []);

  const preparedParams = prepareParams(params);

  const { data, isLoading, error } = useQuery<PaginationResponse<TMovie>>({
    queryKey: ["page", params],
    queryFn: ({ signal }) =>
      fetchMoviePage(
        {
          params: preparedParams,
        },
        signal
      ),
  });

  return { data, isLoading, handlePageClick, error };
};
