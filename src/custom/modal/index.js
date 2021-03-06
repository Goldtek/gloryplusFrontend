import React from "react";
import $ from "jquery";
import swal from 'sweetalert';
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
      swal('Error', "All fields are required !!!", 'error');
      return;
    }
    const user = { name, email, phone };
    storeTrackInfo(user);
    $("#closeBtn").click();
    swal("Info", "User registration successful, Now you can download your desired Sermon.", 'success');
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
            <div className="modal-header" style={{ borderBottom: "none" }}>
              <button type="button" className="close" data-dismiss="modal" id="closeBtn">
                &times;
              </button>
            </div>
            <div className="modal-body">
              {/* NEW FORM ############################################################### STARTS */}

              <div className="row">
                <div className="col-md-12">
                  <div className="form__wrapper  " data--delay="0.5s">
                    <input
                      type="text"
                      required
                      name="name"
                      className="form__input"
                      id="name"
                      onChange={this.handleChange}
                    />
                    <label className="form__label" htmlFor="email">
                      <span className="form__label-content">YOUR NAME</span>
                    </label>
                  </div>

                  <div className="form__wrapper" data--delay="0.5s">
                    <input
                      type="email"
                      className="form__input"
                      id="email"
                      name="email"
                      required
                      onChange={this.handleChange}
                    />
                    <label className="form__label" htmlFor="email">
                      <span className="form__label-content">YOUR EMAIL</span>
                    </label>
                  </div>

                  <div className="form__wrapper  " data--delay="0.5s">
                    <input
                      type="text"
                      className="form__input"
                      id="phone"
                      name="phone"
                      onChange={this.handleChange}
                    />
                    <label className="form__label" htmlFor="email">
                      <span className="form__label-content">
                        YOUR PHONE NUMBER
                      </span>
                    </label>
                  </div>
                  {this.state.error !== "" && (
                    <label className="label label-danger">
                      {this.state.error}
                    </label>
                  )}
                </div>

                <div className="col-xs-6">
                  {" "}
                  <div
                    className="form__wrapper--submit  fadeInLeft"
                    data--delay="0.7s"
                  >
                    <div className="form__input-submit">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary"
                        onClick={this.handleSubmit}
                      >
                        Submit{" "}
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-xs-6">
                  {" "}
                  <div
                    className="form__wrapper--submit  fadeInLeft"
                    data--delay="0.7s"
                  >
                    <div className="form__input-submit">
                      <button
                        className="btn btn-block btn-info"
                        type="button"
                        data-dismiss="modal"
                      >
                        Cancel{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEW FORM ENDS ##############################################################3 */}
            </div>
                     
          </div>
        </div>
      </div>
    );
  }
}

export default ModalComponent;
