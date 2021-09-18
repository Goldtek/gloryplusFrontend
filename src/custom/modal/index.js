import React, { useState } from "react";
import $ from "jquery";
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";

const ModalComponent = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (email === "" || phone === "" || name === "") {
      toast.error("All fields are required !!!", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      return;
    }
    const user = { name, email, phone };
    dispatch({type: "UNREGISTERED_USER", user});
    $("#closeBtn").click();
    toast.success("Your details have been saved, Now you can download your desired Sermons or sow your seed.", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  };

 

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
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label className="form__label" htmlFor="email">
                      <span className="form__label-content">
                        YOUR PHONE NUMBER
                      </span>
                    </label>
                  </div>
                  {error !== "" && (
                    <label className="label label-danger">
                      {error}
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
                        onClick={handleSubmit}
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
              <ToastContainer />
            </div>
                     
          </div>
        </div>
      </div>
    );
  
}

export default ModalComponent;
