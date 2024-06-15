import { TMovie } from "@/entities";
import { axiosInstanceKinop } from "@/shared/api/axiosInstance";
import { PaginationResponse } from "@/shared/api/types";

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
    .then((res) => res.data);
};
