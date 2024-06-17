import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviePage } from "./fetchMoviePage";

import { KinopQueries, PaginationResponse } from "@/shared/types/api";
import { TMovie } from "@/entities";

export const useMovieList = (limit: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const curPageQuery = searchParams.get(KinopQueries.page);
  const genresQuery = searchParams.get(KinopQueries.genres) ?? "";
  const yearQuery = searchParams.get(KinopQueries.year);
  const ratingQuery = searchParams.get(KinopQueries.rating);

  const handlePageClick = (newPage: number) => {
    searchParams.set(KinopQueries.page, newPage.toString());
    setSearchParams(searchParams);
  };

  const params = new URLSearchParams();
  params.append("limit", limit.toString());
  if (curPageQuery) params.append(KinopQueries.page, curPageQuery);
  if (yearQuery) params.append(KinopQueries.year, yearQuery);
  if (ratingQuery) params.append(KinopQueries.rating, ratingQuery);
  if (genresQuery) {
    genresQuery
      .split(",")
      .forEach((genre) => params.append(KinopQueries.genres, genre));
  }

  const { data, isLoading, error } = useQuery<PaginationResponse<TMovie>>({
    queryKey: ["page", curPageQuery, genresQuery, yearQuery, ratingQuery],
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
