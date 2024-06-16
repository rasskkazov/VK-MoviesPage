import { TSelectOptions } from "@/shared/types/selectOptions";
import { useState } from "react";

export const useYearFilter = () => {
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

  return {
    selectedYear,
    setSelectedYear,
    yearsOptions,
    selectedDecade,
    setSelectedDecade,
    decadesOptions,
  };
};
