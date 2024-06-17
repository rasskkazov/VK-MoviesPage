import { TMovie } from "@/entities";
import { axiosInstanceKinop } from "@/shared/api/axiosInstance";
import { PaginationResponse } from "@/shared/types/api";
import { error } from "console";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchMoviePage = (
  pageNumber: number,
  limit: number,
  signal?: AbortSignal
) => {
  const params = {
    params: {
      page: pageNumber,
      limit,
    },
  };
  return axiosInstanceKinop
    .get<PaginationResponse<TMovie>>("movie", {
      ...getOptions,
      ...params,
      signal,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
