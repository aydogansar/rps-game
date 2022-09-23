import { useState } from "react";
import { Modal } from "components";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return {
    open,
    openModal,
    closeModal,
    Modal,
  };
};

export default useModal;
