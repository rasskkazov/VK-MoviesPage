import { FormItem, Slider } from "@vkontakte/vkui";

import { UpdateFiltersAction } from "@/shared/types/api";

export const RatingFilter = ({
  dispatch,
}: {
  dispatch: React.Dispatch<UpdateFiltersAction>;
}) => {
  const onSelectRange = (value: [number, number]) => {
    dispatch({ type: "UPDATE_RATING", payload: `${value[0]}-${value[1]}` });
  };

  return (
    <FormItem top="Рейтинг">
      <Slider
        min={0}
        max={10}
        withTooltip
        multiple
        onChange={(value) => onSelectRange(value)}
      />
    </FormItem>
  );
};
