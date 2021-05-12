import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop: React.FC<{ onClose: () => void }> = (props) => {
  return (
    <div onClick={() => props.onClose()} className={classes.backdrop}></div>
  );
};

const ModalOverlay: React.FC<any> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalTarget = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<{ onClose: () => void }> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalTarget
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalTarget
      )}
    </>
  );
};

export default Modal;
