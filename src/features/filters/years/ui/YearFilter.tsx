import { CustomSelect, FormItem, Group } from "@vkontakte/vkui";
import { useYearFilter } from "../model/useYearFilter";
import { UpdateFiltersAction } from "../../model/types";

export const YearFilter = ({
  dispatch,
}: {
  dispatch: React.Dispatch<UpdateFiltersAction>;
}) => {
  const {
    decadesOptions,
    yearsOptions,
    selectedDecade,
    setSelectedDecade,
    setSelectedYear,
  } = useYearFilter();

  const onSelectDecade = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDecade(e.target.value);
    const newYearsFilterValue = `${Number(e.target.value)}-${
      Number(e.target.value) + 9
    }`;
    dispatch({ type: "UPDATE_YEAR", payload: newYearsFilterValue });
  };

  const onSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    dispatch({ type: "UPDATE_YEAR", payload: e.target.value });
  };

  return (
    <>
      <FormItem top="Период" htmlFor="decade">
        <CustomSelect
          id="decade"
          placeholder="Не выбран"
          options={decadesOptions}
          onChange={onSelectDecade}
        />
      </FormItem>
      {selectedDecade && (
        <FormItem top="Год" htmlFor="year">
          <CustomSelect
            id="year"
            placeholder="Не выбран"
            options={yearsOptions}
            onChange={onSelectYear}
          />
        </FormItem>
      )}
    </>
  );
};
