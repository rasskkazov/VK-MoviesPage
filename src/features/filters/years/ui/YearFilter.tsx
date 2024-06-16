import { ChangeEvent, useState } from "react";

import { CustomSelect, FormItem, Group } from "@vkontakte/vkui";
import { TSelectOptions } from "@/shared/types/selectOptions";
import { useYearFilter } from "../model/useYearFilter";

export const YearFilter = () => {
  const {
    decadesOptions,
    yearsOptions,
    selectedDecade,
    setSelectedDecade,
    setSelectedYear,
  } = useYearFilter();

  return (
    <>
      <FormItem top="Период" htmlFor="decade">
        <CustomSelect
          id="decade"
          placeholder="Не выбран"
          options={decadesOptions}
          onChange={(e) => setSelectedDecade(e.target.value)}
        />
      </FormItem>
      {selectedDecade && (
        <FormItem top="Год" htmlFor="year">
          <CustomSelect
            id="year"
            placeholder="Не выбран"
            options={yearsOptions}
            onChange={(e) => setSelectedYear(e.target.value)}
          />
        </FormItem>
      )}
    </>
  );
};
