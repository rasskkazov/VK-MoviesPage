import { Icon24Filter } from "@vkontakte/icons";
import { Group } from "@vkontakte/vkui";

import { OpenModalBtn } from "@/shared/ui/OpenModalBtn/OpenModalBtn";
import * as classes from "./Movies.module.scss";

export const SubnavMob = ({
  modalId,
  setActiveModal,
}: {
  modalId: string;
  setActiveModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Group
      className={classes.movies__subNavMob}
      style={{ padding: "0.8rem 1.6rem" }}
    >
      <OpenModalBtn
        text="Фильтры"
        modalId={modalId}
        setActiveModal={setActiveModal}
        icon={<Icon24Filter />}
      />
    </Group>
  );
};
