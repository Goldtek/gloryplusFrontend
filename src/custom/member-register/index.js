import React from "react";

const MembeRegister = () => {
  return (
    <div className="container">
      <div className="col-md-12 col-sm-12 col-lg-12 mt-5 login-div">
        <div className="section-title title-left">
          <h2 align="center">REGISTER FORM</h2>
        </div>
        <form className="contact-form">
          <div className="row">
            <div className="col-sm-6">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="col-sm-6">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="col-sm-6">
              <input type="text" placeholder="Email" />
            </div>
            <div className="col-sm-6">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="col-sm-6">
              <input type="password" placeholder="  Password" />
            </div>
            <div className="col-sm-6">
              <input type="password" placeholder=" Confirm Password" />
            </div>

            <div className="col-sm-12">
              <textarea placeholder="Your Contact Address..."></textarea>
              <button type="submit" className="site-login-btn">
                Register
              </button>
              &nbsp;&nbsp;
              <a href="/login" className="site-btn">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembeRegister;
