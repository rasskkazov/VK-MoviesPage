import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import { QUERIES, UpdateFiltersAction } from "@/shared/types/api";

export const useRatingFilter = (
  minRating: number,
  maxRating: number,
  dispatch: React.Dispatch<UpdateFiltersAction>
) => {
  const [range, setRange] = useState<[number, number]>([minRating, maxRating]);

  const onSelectRange = (newRange: [number, number]) => {
    setRange(newRange);
    let newRangeQuery: string = `${newRange[0]}-${newRange[1]}`;
    if (newRange[0] === minRating && newRange[1] === maxRating)
      newRangeQuery = null;

    dispatch({
      type: "UPDATE_RATING",
      payload: newRangeQuery,
    });
  };

  const queryString = useLocation().search;
  useEffect(() => {
    const params = qs.parse(queryString, { ignoreQueryPrefix: true });
    const queryRatingString = params[QUERIES.rating] as string;

    let [start, end] = [minRating, maxRating];
    if (typeof queryRatingString === "string")
      [start, end] = queryRatingString.split("-").map(Number);

    onSelectRange([start, end]);
  }, [queryString]);

  return { range, onSelectRange };
};
