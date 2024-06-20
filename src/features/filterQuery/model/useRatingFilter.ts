import { useState, useEffect } from "react";
import { filterQueryStorage } from "./FilterQueryStorage";

import { QUERIES } from "@/shared/types/api";

export const useRatingFilter = (minRating: number, maxRating: number) => {
  const [range, setRange] = useState<[number, number]>([minRating, maxRating]);

  const onSelectRange = (newRange: [number, number]) => {
    setRange(newRange);
    let newRangeQuery: string = `${newRange[0]}-${newRange[1]}`;
    if (newRange[0] === minRating && newRange[1] === maxRating)
      newRangeQuery = null;

    filterQueryStorage.setQueryParameter(QUERIES.rating, newRangeQuery);
  };

  useEffect(() => {
    const queryRating = filterQueryStorage.getQueryParameter(
      QUERIES.rating
    ) as string;
    let [start, end] = [minRating, maxRating];
    if (queryRating) [start, end] = queryRating.split("-").map(Number);
    setRange([start, end]);
  }, []);

  return { range, onSelectRange };
};
