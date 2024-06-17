import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviePage } from "./fetchMoviePage";

import { PaginationResponse } from "@/shared/types/api";
import { TMovie } from "@/entities";

export const useMovieList = (limit: number) => {
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const curPage = Number(pageNumber ?? "1");
  let curPath = useLocation().pathname;

  const handlePageClick = (newPage: number) => {
    if (newPage === 1) {
      navigate("/");
      return;
    }

    if (curPage === 1) curPath += `/page/${newPage}`;
    else curPath = curPath.replace(/\/page\/\d+/, `/page/${newPage}`);

    navigate(curPath);
  };

  const { data, isLoading, error } = useQuery<PaginationResponse<TMovie>>({
    queryKey: ["page", curPage],
    queryFn: ({ signal }) =>
      fetchMoviePage({ params: { page: curPage, limit } }, signal),
  });

  if (error) console.warn(error.message);

  return { data, isLoading, handlePageClick, error };
};
