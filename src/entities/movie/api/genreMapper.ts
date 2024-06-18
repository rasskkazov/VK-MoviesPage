import { TGenres } from "../types/type";
import { TSelectOptions } from "@/shared/types/selectOptions";

export const genreMapper = (rawGenres: TGenres): TSelectOptions => {
  return rawGenres.map((rawGenre) => ({
    label: rawGenre.name,
    value: rawGenre.name,
  }));
};
