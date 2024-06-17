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
  options: {
    params: {
      page: number;
      limit: number;
    };
  },
  signal?: AbortSignal
) => {
  return axiosInstanceKinop
    .get<PaginationResponse<TMovie>>("movie", {
      ...getOptions,
      ...options,
      signal,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
