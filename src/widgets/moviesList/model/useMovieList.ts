import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { TMovie } from "@/entities";

import { fetchMoviePage } from "./fetchMoviePage";
import { PaginationResponse } from "@/shared/api/types";

export const useMovieList = (limit: number) => {
  const { pageNumber } = useParams();
  const curPage = Number(pageNumber ?? "1");

  return useQuery<PaginationResponse<TMovie>>({
    queryKey: ["page", curPage],
    queryFn: ({ signal }) => fetchMoviePage(curPage, limit, signal),
  });
};
