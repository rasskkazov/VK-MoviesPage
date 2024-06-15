import { CheckboxFilter } from "@/features";
import { FormLayoutGroup } from "@vkontakte/vkui";

export const MovieListFilter = () => {
  return (
    <FormLayoutGroup mode="vertical">
      <CheckboxFilter />
    </FormLayoutGroup>
  );
};
