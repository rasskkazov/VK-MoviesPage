import { TSelectOptions } from "@/shared/types/selectOptions";

export const yearOptionsFromDecade = (decade: string) => {
  let yearsOptions: TSelectOptions = [];
  for (let i = Number(decade); i < Number(decade) + 10; i++) {
    yearsOptions.push({
      label: `${i}`,
      value: i.toString(),
    });
  }
  return yearsOptions;
};
