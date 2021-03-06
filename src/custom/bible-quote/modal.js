import React from "react";

function Modal({ quote }) {
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
            <div className="modal-header">
              {/* <h4 className="modal-title" id="myModalLabel-2">
                QUOTE OF THE DAY
              </h4> */}
            </div>

            <div className="modal-body">
              <blockquote>
                <p>{quote}</p>
              </blockquote>
            </div>

            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-dialog btn-xs"
                data-dismiss="modal"
              >
                Close
              </button> */}
              {/* <button type="button" className="btn btn-dialog">
                  Ok
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
