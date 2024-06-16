import { FormItem, Slider } from "@vkontakte/vkui";

export const RatingFilter = () => {
  return (
    <FormItem top="Рейтинг">
      <Slider min={0} max={10} withTooltip multiple />
    </FormItem>
  );
};
