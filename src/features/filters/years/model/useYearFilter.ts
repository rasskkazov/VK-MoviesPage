import { useState } from "react";

import { UpdateFiltersAction } from "@/shared/types/api";
import { TSelectOptions } from "@/shared/types/selectOptions";

function toFilterDecadeValue(year: string) {
  return `${Number(year)}-${Number(year) + 9}`;
}

export const useYearFilter = (
  dispatch: React.Dispatch<UpdateFiltersAction>
) => {
  const [selectedDecade, setSelectedDecade] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const decadesOptions: TSelectOptions = [];
  for (let i = 1990; i < new Date().getFullYear(); i += 10) {
    decadesOptions.push({
      label: `${i}-ые`,
      value: i.toString(),
    });
  }

  let yearsOptions: TSelectOptions = [];

  if (selectedDecade) {
    for (let i = Number(selectedDecade); i < Number(selectedDecade) + 10; i++) {
      yearsOptions.push({
        label: `${i}`,
        value: i.toString(),
      });
    }
  }

  const onSelectDecade = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDecade(e.target.value);
    dispatch({
      type: "UPDATE_YEAR",
      payload: e.target.value ? toFilterDecadeValue(e.target.value) : "",
    });
  };

  const onSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    dispatch({
      type: "UPDATE_YEAR",
      payload: e.target.value
        ? e.target.value
        : toFilterDecadeValue(selectedDecade),
    });
  };

  return {
    selectedYear,
    onSelectYear,
    yearsOptions,
    selectedDecade,
    onSelectDecade,
    decadesOptions,
  };
};
