import React from "react";
import $ from "jquery";
import { storeTrackInfo } from "../../lib/util";

class ModalComponent extends React.Component {
  state = {
    email: "",
    phone: "",
    name: ""
  };
  handleSubmit = () => {
    const { email, phone, name } = this.state;
    if (email === "" || phone === "" || name === "") {
      return this.setState({ error: "All fields are required." });
    }
    const user = { name, email, phone };
    storeTrackInfo(user);
    $("#closeBtn").click();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
  };
  render() {
    return (
      <div id="modalBox" className="modal fade" role="dialog">
        <div className="modal-dialog modal-md modal-danger  modal-notify">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  required
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                  required
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error !== "" && (
                <label className="label label-danger">{this.state.error}</label>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                id="closeBtn"
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

export default ModalComponent;
