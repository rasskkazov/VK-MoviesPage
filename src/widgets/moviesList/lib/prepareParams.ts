import { QUERIES } from "@/shared/types/api";

export const prepareParams = (params: qs.ParsedQs) => {
  const decade = Number(params[QUERIES.decade]);
  const years = Number(params[QUERIES.year]);

  let res = params;
  if (isNaN(years) && decade) {
    res = {
      ...params,
      years: `${decade}-${decade + 9}`,
    };
  }
  delete res.decade;
  return res;
};
