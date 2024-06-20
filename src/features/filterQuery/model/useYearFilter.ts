import { useEffect, useState } from "react";
import { filterQueryStorage } from "./FilterQueryStorage";
import { yearOptionsFromDecade } from "../lib/yearsOptionsFromDecade";
import { decadesOptionsFromDecade } from "../lib/decadesOptionsFromDecade";

import { TSelectOptions } from "@/shared/types/selectOptions";
import { QUERIES } from "@/shared/types/api";

let decadesOptions: TSelectOptions = decadesOptionsFromDecade(1990);

export const useYearFilter = () => {
  const [selectedDecade, setSelectedDecade] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  let yearsOptions: TSelectOptions = [];
  if (selectedDecade) yearsOptions = yearOptionsFromDecade(selectedDecade);

  const onSelectDecade = (newDecade: string) => {
    setSelectedDecade(newDecade);
    filterQueryStorage.setQueryParameter(QUERIES.decade, newDecade);
    if (!newDecade) {
      setSelectedYear(null);
      filterQueryStorage.setQueryParameter(QUERIES.decade, null);
      filterQueryStorage.setQueryParameter(QUERIES.year, null);
    }
  };

  const onSelectYear = (newYear: string) => {
    setSelectedYear(newYear);
    filterQueryStorage.setQueryParameter(QUERIES.year, newYear);
    if (!newYear) filterQueryStorage.setQueryParameter(QUERIES.year, null);
  };

  useEffect(() => {
    const queryDecade = filterQueryStorage.getQueryParameter(QUERIES.decade);
    const queryYear = filterQueryStorage.getQueryParameter(QUERIES.year);
    setSelectedDecade(queryDecade as string);
    setSelectedYear(queryYear as string);
  }, []);

  return {
    selectedYear,
    onSelectYear,
    yearsOptions,
    selectedDecade,
    onSelectDecade,
    decadesOptions,
  };
};
