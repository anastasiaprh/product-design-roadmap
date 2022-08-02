import React, { useState } from "react";

const ModalContext = React.createContext({
  showDetailsHandler: (text) => {},
  hideDetailsHandler: () => {},
  currentTopicTitle: null,
  isModalOpen: false,
});

export const ModalContextProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTopicTitle, setCurrentTopicTitle] = useState("null");

  const showModal = (text) => {
    setIsModalOpen(true);
    setCurrentTopicTitle(text);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
        currentTopicTitle,
        isModalOpen,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
