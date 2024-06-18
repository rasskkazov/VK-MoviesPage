import { TMovie } from "@/entities";
import { fetchData } from "@/shared/api/fetchData";

export const fetchMovie = (id: number) => {
  return fetchData<TMovie>(`movie/${id}`);
};
