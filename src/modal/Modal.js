import React from "react";
import ModalDetails from "./ModalDetails";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const { topicData } = props;
  return (
    <ModalOverlay>
      <ModalDetails topicData={topicData} />
    </ModalOverlay>
  );
};

export default Modal;
