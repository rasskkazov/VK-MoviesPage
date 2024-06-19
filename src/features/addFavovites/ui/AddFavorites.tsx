import { Icon24FavoriteOutline } from "@vkontakte/icons";

import { TMovie } from "@/entities";
import { Button } from "@vkontakte/vkui";

export const AddFavorites = (props: { movieData: TMovie }) => {
  return (
    <Button
      onClick={() => {}}
      size="l"
      appearance="accent"
      mode="tertiary"
      before={<Icon24FavoriteOutline />}
    ></Button>
  );
};
