import { CustomSelect, FormItem } from "@vkontakte/vkui";
import { useYearFilter } from "../model/useYearFilter";

import { UpdateFiltersAction } from "@/shared/types/api";

export const YearFilter = ({
  dispatch,
}: {
  dispatch: React.Dispatch<UpdateFiltersAction>;
}) => {
  const {
    selectedYear,
    onSelectYear,
    yearsOptions,
    selectedDecade,
    onSelectDecade,
    decadesOptions,
  } = useYearFilter(dispatch);

  return (
    <>
      <FormItem top="Период" htmlFor="decade">
        <CustomSelect
          id="decade"
          placeholder="Не выбран"
          options={decadesOptions}
          onChange={(e) => onSelectDecade(e.target.value)}
          allowClearButton
          value={selectedDecade}
        />
      </FormItem>
      {selectedDecade && (
        <FormItem top="Год" htmlFor="year">
          <CustomSelect
            id="year"
            placeholder="Не выбран"
            options={yearsOptions}
            onChange={(e) => onSelectYear(e.target.value)}
            allowClearButton
            value={selectedYear}
          />
        </FormItem>
      )}
    </>
  );
};
