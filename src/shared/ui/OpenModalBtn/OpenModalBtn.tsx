import { SubnavigationButton } from "@vkontakte/vkui";
import { ReactNode } from "react";

export const OpenModalBtn = ({
  text,
  modalId,
  setActiveModal,
  icon,
}: {
  text: string;
  modalId: string;
  setActiveModal: React.Dispatch<React.SetStateAction<string>>;
  icon: ReactNode;
}) => {
  return (
    <SubnavigationButton before={icon} onClick={() => setActiveModal(modalId)}>
      {text}
    </SubnavigationButton>
  );
};
