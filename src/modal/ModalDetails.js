import React, { useContext } from "react";
import { ListOfLinks } from "../components/ListOfLinks";
import classes from "./ModalDetails.module.css";
import ModalContext from "./modalContext";

const ModalDetails = (props) => {
  const { hideModal } = useContext(ModalContext);
  const { title, description, links } = props.topicData;
  return (
    <div classes={classes["modal__content"]}>
      <header className={classes["modal__header"]}>{title}</header>
      <button
        onClick={hideModal}
        type="button"
        aria-label="Close"
        className={classes["modal__close-ic"]}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 23L9 9"
            stroke="#868E96"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M23 9L9 23"
            stroke="#868E96"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={classes["modal__body"]}>
        <p className={classes["topic-description"]}>{description}</p>
        <ListOfLinks links={links} />
      </div>
      <footer className={classes["modal__footer"]}>
        <button
          onClick={hideModal}
          type="button"
          className={classes["modal__close-btn"]}
        >
          Close
        </button>
      </footer>
    </div>
  );
};

export default ModalDetails;
