import { TSelectOptions } from "@/shared/types/selectOptions";

export const decadesOptionsFromDecade = (startDecade: number) => {
  let decadesOptions: TSelectOptions = [];
  for (let i = startDecade; i < new Date().getFullYear(); i += 10) {
    decadesOptions.push({
      label: `${i}-ые`,
      value: i.toString(),
    });
  }
  return decadesOptions;
};
