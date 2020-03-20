import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="demo4"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog opacity-animate4">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  align="center"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "1rem"
                  }}
                >
                  {this.props.title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p> {this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
