import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { filterQueryStorage } from "@/features";

import { QUERIES } from "@/shared/types/api";

export const useMovieListFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const submit = (e: FormEvent) => {
    e.preventDefault();

    filterQueryStorage.setQueryParameter(QUERIES.page, "1");
    const newURL = new URLSearchParams(filterQueryStorage.getQueryString());
    setSearchParams(newURL);
  };

  return { submit };
};
