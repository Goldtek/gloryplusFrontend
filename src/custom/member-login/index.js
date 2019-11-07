import React from "react";

const MemberLogin = () => {
  return (
    <div className="container ">
      <div className="col-md-12 col-sm-12 col-lg-12 mt-5 login-div">
        <div className="section-title title-left">
          <h2 align="center">LOGIN FORM</h2>
        </div>
        <form className="contact-form ">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              {" "}
              <div className="col-sm-12">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="col-sm-12">
                <input type="password" placeholder=" Your Password" />
                <button type="submit" className="site-login-btn">
                  Login
                </button>
                &nbsp;&nbsp;
                <a href="/register" className="site-btn">
                  Register
                </a>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberLogin;
