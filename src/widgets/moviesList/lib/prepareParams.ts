import QueryString from "qs";

import { QUERIES } from "@/shared/types/api";

export const prepareParams = (params: QueryString.ParsedQs) => {
  const decade = Number(params[QUERIES.decade]);
  const years = Number(params[QUERIES.year]);
  let res = params;
  if (isNaN(years) && decade) {
    res = {
      ...params,
      [QUERIES.year]: `${decade}-${decade + 9}`,
    };
  }
  return res;
};
