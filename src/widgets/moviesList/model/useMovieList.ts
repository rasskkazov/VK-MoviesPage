import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviePage } from "./fetchMoviePage";

import { paths } from "@/shared/constant/paths";
import { PaginationResponse } from "@/shared/types/api";
import { TMovie } from "@/entities";

export const useMovieList = (limit: number) => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const curPage = Number(pageNumber ?? "1");

  const handlePageClick = (newPage: number) => {
    if (newPage === 1) {
      navigate("/");
      return;
    }

    navigate(`/${paths.MOVIES}/${paths.PAGE}/${newPage}`);
  };

  const { data, isLoading, error } = useQuery<PaginationResponse<TMovie>>({
    queryKey: ["page", curPage],
    queryFn: ({ signal }) => fetchMoviePage(curPage, limit, signal),
  });

  if (error) console.warn(error.message);

  return { data, isLoading, handlePageClick, error };
};
