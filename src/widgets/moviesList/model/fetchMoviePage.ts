import { TMovie } from "@/entities";
import { axiosInstanceKinop } from "@/shared/api/axiosInstance";
import { PaginationResponse } from "@/shared/types/api";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchMoviePage = (
  options: {
    params: qs.ParsedQs;
  },
  signal?: AbortSignal
) => {
  return axiosInstanceKinop
    .get<PaginationResponse<TMovie>>("movie", {
      ...getOptions,
      ...options,
      paramsSerializer: {
        indexes: null,
      },
      signal,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
