import { useState } from "react";

export const useModal = () => {
  const [activeModal, setActiveModal] = useState<string>(null);
  const [modalHistory, setModalHistory] = useState([]);

  const changeActiveModal = (activeModal: string) => {
    activeModal = activeModal || null;
    let localModalHistory = modalHistory ? [...modalHistory] : [];

    if (activeModal === null) {
      localModalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
      localModalHistory = localModalHistory.splice(
        0,
        localModalHistory.indexOf(activeModal) + 1
      );
    } else {
      localModalHistory.push(activeModal);
    }

    setActiveModal(activeModal);
    setModalHistory(localModalHistory);
  };

  const modalBack = () => {
    changeActiveModal(modalHistory[modalHistory.length - 2]);
  };

  return {
    activeModal,
    setActiveModal,
    modalBack,
  };
};
