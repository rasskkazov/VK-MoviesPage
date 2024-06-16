import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { TMovie } from "@/entities";

import { fetchMoviePage } from "./fetchMoviePage";
import { PaginationResponse } from "@/shared/api/types";
import { paths } from "@/shared/constant/paths";

export const useMovieList = (limit: number) => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const curPage = Number(pageNumber ?? "1");

  const handlePageClick = (newPage: number) => {
    if (newPage === 1) {
      navigate(`/`);
      return;
    }
    navigate(`/${paths.MOVIES}/${paths.PAGE}/${newPage}`);
  };

  const { data, isLoading } = useQuery<PaginationResponse<TMovie>>({
    queryKey: ["page", curPage],
    queryFn: ({ signal }) => fetchMoviePage(curPage, limit, signal),
  });
  return { data, isLoading, handlePageClick };
};
