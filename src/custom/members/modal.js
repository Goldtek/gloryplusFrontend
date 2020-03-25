import React from "react";
const Modal = props => {
  return (
    <div
      className="modal animated rollIn fade"
      id={props.partner}
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body"> {props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
