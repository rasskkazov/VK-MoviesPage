import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviePage } from "./fetchMoviePage";

import { KinopQueries, PaginationResponse } from "@/shared/types/api";
import { TMovie } from "@/entities";

export const useMovieList = (limit: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const curPage = searchParams.get(KinopQueries.page);
  const genres = searchParams.get(KinopQueries.genres);
  const year = searchParams.get(KinopQueries.year);
  const rating = searchParams.get(KinopQueries.rating);

  const handlePageClick = (newPage: number) => {
    searchParams.set(KinopQueries.page, newPage.toString());
    setSearchParams(searchParams);
  };

  const options = {
    params: {
      page: curPage,
      limit,
      "genres.name": genres,
      year,
      "rating.imdb": rating,
    },
  };

  const { data, isLoading, error } = useQuery<PaginationResponse<TMovie>>({
    queryKey: ["page", curPage, genres, year, rating],
    queryFn: ({ signal }) => fetchMoviePage(options, signal),
  });
  if (error) console.warn(error.message);

  return { data, isLoading, handlePageClick, error };
};
