import React from "react";

const Modal = ({ quote }) => {
  return (
    <div className="container demo">
      <div
        className="modal fade"
        id="myModal-2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel-2"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header"></div>

            <div className="modal-body">
              <blockquote>
                <p>{quote}</p>
              </blockquote>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dialog btn-xs"
                data-dismiss="modal"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
