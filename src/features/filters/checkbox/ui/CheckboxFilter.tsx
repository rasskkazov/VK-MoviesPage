import { Group, FormItem, Checkbox, Header } from "@vkontakte/vkui";
import { useCheckboxFilter } from "../model/useCheckboxFilter";

export const CheckboxFilter = () => {
  // const { genres, isLoading } = useCheckboxFilter();
  return (
    <Group header={<Header>Жанры</Header>}>
      {/* {!isLoading && (
        <>
          {genres.map((genre) => (
            <Checkbox key={genre.slug}>{genre.name}</Checkbox>
          ))}
        </>
      )} */}
    </Group>
  );
};
