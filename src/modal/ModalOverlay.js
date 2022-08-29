import React from "react";
import ReactDOM from "react-dom";
import classes from "./ModalOverlay.module.css";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import ModalContext from "./modalContext";
import { useContext } from "react";

const portalElement = document.getElementById("overlays");

const ModalOverlay = (props) => {
  const { isModalOpen, hideModal } = useContext(ModalContext);

  return ReactDOM.createPortal(
    <React.Fragment>
      <CSSTransition
        in={isModalOpen}
        timeout={{ enter: 300, exit: 0 }}
        classNames={{
          enter: classes["backdrop-enter"],
          enterActive: classes["backdrop-enter-active"],
          exit: classes["backdrop-exit"],
          exitActive: classes["backdrop-exit-active"],
        }}
        unmountOnExit
      >
        <Backdrop onClose={hideModal}></Backdrop>
      </CSSTransition>
      <CSSTransition
        in={isModalOpen}
        timeout={{ enter: 300, exit: 0 }}
        classNames={{
          enter: classes["modal-enter"],
          enterActive: classes["modal-enter-active"],
          exit: classes["modal-exit"],
          exitActive: classes["modal-exit-active"],
        }}
        unmountOnExit
      >
        <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div>
        </div>
      </CSSTransition>
    </React.Fragment>,
    portalElement
  );
};

export default ModalOverlay;
