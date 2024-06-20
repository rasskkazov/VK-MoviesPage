import { FormItem, Slider } from "@vkontakte/vkui";

import { UpdateFiltersAction } from "@/shared/types/api";
import { useRatingFilter } from "../model/useRatingFilter";

const MIN_RATING = 0;
const MAX_RATING = 10;

export const RatingFilter = () => {
  const { range, onSelectRange } = useRatingFilter(MIN_RATING, MAX_RATING);

  return (
    <FormItem top="Рейтинг">
      <Slider
        min={MIN_RATING}
        max={MAX_RATING}
        withTooltip
        multiple
        onChange={onSelectRange}
        value={range}
      />
    </FormItem>
  );
};
