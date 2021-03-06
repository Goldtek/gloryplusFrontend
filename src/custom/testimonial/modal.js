import React, { Component } from "react";
import "./testimonial.css";
class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade fade-flip bs-example-modal-new"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {/* <h4 className="modal-title" id="gridSystemModalLabel">
                {this.props.title}
              </h4> */}
            </div>

            <div className="modal-body">
              <div className="body-message">
                <h4 align="center" style={{ textTransform: "uppercase" }}>
                  {this.props.title}
                </h4>
                <br />
                <p>{this.props.description}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
