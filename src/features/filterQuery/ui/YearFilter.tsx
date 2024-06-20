import { CustomSelect, FormItem } from "@vkontakte/vkui";
import { useYearFilter } from "../model/useYearFilter";

export const YearFilter = () => {
  const {
    selectedYear,
    onSelectYear,
    yearsOptions,
    selectedDecade,
    onSelectDecade,
    decadesOptions,
  } = useYearFilter();

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
