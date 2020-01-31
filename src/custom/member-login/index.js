import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import serializeForm from "form-serialize";

class MemberLogin extends React.Component {
  handleLogin = e => {
    e.preventDefault();
    const loginValues = serializeForm(e.target, { hash: true });
    console.log(loginValues);
  };
  render() {
    return (
      <div className="container ">
        <div className="col-md-12 col-sm-12 col-lg-12 mt-5 login-div">
          <div className="container login-container">
            <div className="row">
              <div className="col-md-6 login-form-1">
                <h3>
                  <div className="img-logo">
                    <img src="/img/logo/round-logo.png" alt="gloryplus-logo" />
                  </div>
                </h3>
                <form>
                  <div className="form-group"></div>
                  <div className="form-group"></div>
                  <div className="form-group"></div>
                  <div className="form-group">
                    <Link to="/register" className="ForgetPwd">
                      Not yet a partner ? <u>click here to join</u>
                    </Link>
                  </div>
                </form>
              </div>

              <div className="col-md-6 login-form-2">
                <h3>Partner Login</h3>
                <form onSubmit={this.handleLogin}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      required
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your Password *"
                      required
                      name="password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="checkbox checkbox-info">
                      <input
                        id="checkbox4"
                        className="styled"
                        type="checkbox"
                      />
                      <label htmlFor="checkbox4">Remember Me</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btnSubmit" value="Login" />
                  </div>
                  <div className="form-group">
                    <Link to="#" className="ForgetPwd" value="Login">
                      Forget Password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberLogin;
