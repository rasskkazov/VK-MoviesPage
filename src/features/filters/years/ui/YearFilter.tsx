import { CustomSelect, FormItem, Group } from "@vkontakte/vkui";
import { useYearFilter } from "../model/useYearFilter";
import { UpdateFiltersAction } from "../../model/types";

function toFilterDecadeValue(year: string) {
  return `${Number(year)}-${Number(year) + 9}`;
}

export const YearFilter = ({
  dispatch,
}: {
  dispatch: React.Dispatch<UpdateFiltersAction>;
}) => {
  const {
    selectedYear,
    setSelectedYear,
    yearsOptions,
    selectedDecade,
    setSelectedDecade,
    decadesOptions,
  } = useYearFilter();

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

  return (
    <>
      <FormItem top="Период" htmlFor="decade">
        <CustomSelect
          id="decade"
          placeholder="Не выбран"
          options={decadesOptions}
          onChange={onSelectDecade}
          allowClearButton
        />
      </FormItem>
      {selectedDecade && (
        <FormItem top="Год" htmlFor="year">
          <CustomSelect
            id="year"
            placeholder="Не выбран"
            options={yearsOptions}
            onChange={onSelectYear}
            allowClearButton
          />
        </FormItem>
      )}
    </>
  );
};
