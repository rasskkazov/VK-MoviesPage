import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import { yearOptionsFromDecade } from "../lib/yearsOptionsFromDecade";
import { decadesOptionsFromDecade } from "../lib/decadesOptionsFromDecade";

import { QUERIES, UpdateFiltersAction } from "@/shared/types/api";
import { TSelectOptions } from "@/shared/types/selectOptions";

let decadesOptions: TSelectOptions = decadesOptionsFromDecade(1990);

export const useYearFilter = (
  dispatch: React.Dispatch<UpdateFiltersAction>
) => {
  const [selectedDecade, setSelectedDecade] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  let yearsOptions: TSelectOptions = [];
  if (selectedDecade) yearsOptions = yearOptionsFromDecade(selectedDecade);

  const onSelectDecade = (newDecade: string) => {
    setSelectedDecade(newDecade);
    dispatch({
      type: "UPDATE_DECADE",
      payload: newDecade ? newDecade : null,
    });

    if (!newDecade) {
      setSelectedYear("");
      dispatch({
        type: "UPDATE_YEAR",
        payload: null,
      });
    }
  };

  const onSelectYear = (newYear: string) => {
    setSelectedYear(newYear);
    dispatch({
      type: "UPDATE_YEAR",
      payload: newYear ? newYear : null,
    });
  };

  const queryString = useLocation().search;
  useEffect(() => {
    const params = qs.parse(queryString, { ignoreQueryPrefix: true });
    onSelectDecade(params[QUERIES.decade] as string);
    onSelectYear(params[QUERIES.year] as string);
  }, [queryString]);

  return {
    selectedYear,
    onSelectYear,
    yearsOptions,
    selectedDecade,
    onSelectDecade,
    decadesOptions,
  };
};
