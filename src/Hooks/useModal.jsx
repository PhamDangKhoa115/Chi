import { useState } from "react";

export default function useModal() {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return { show, selectedItem, openModal, closeModal };
}
