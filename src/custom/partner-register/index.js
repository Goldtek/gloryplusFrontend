import React from "react";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import { connect } from "react-redux";
import { register } from "../../actions"


class MembeRegister extends React.Component {
  handleRegister = e => {
    e.preventDefault();
    const regValues = serializeForm(e.target, { hash: true });
   this.props.register(regValues);
  };
  render() {
    return (
      <div className="container ">
        <div className="col-md-12 col-sm-12 col-lg-12 mt-5 login-div">
          <div className="container login-container">
            <div className="row">
              <div className="col-md-6 login-form-1 reg">
                <h3>
                  <div className="img-logo">
                    <img src="/img/round-logo.png" alt="gloryplus-logo" />
                  </div>
                </h3>
                <form>
                  <div className="form-group"></div>
                  <div className="form-group"></div>
                  <div className="form-group"></div>
                  <div className="form-group">
                    <Link to="/login" className="ForgetPwd">
                      Already a member ? <u>Click here to login</u>
                    </Link>
                    <h4>
                      We are glad to have you here, please register and proceed
                      to login page.
                    </h4>
                  </div>
                </form>
              </div>

              <div className="col-md-6 login-form-2">
                <h3> Registration</h3>
                <form onSubmit={this.handleRegister}>
                <div className="form-group">
                    <input
                      type="input"
                      className="form-control"
                      placeholder="Firstname *"
                      required
                      name="firstname"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="input"
                      className="form-control"
                      placeholder="Lastname *"
                      required
                      name="lastname"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="input"
                      className="form-control"
                      placeholder="WhatsApp  number*"
                      name="whatsapp"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="input"
                      className="form-control"
                      placeholder="Other Number*"
                      required
                      name="other"
                    />
                  </div>
                
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
                    <input
                      type="input"
                      className="form-control"
                      placeholder="State *"
                      required
                      name="state"
                    />
                  </div>
                     <div className="form-group">
                    <input
                      type="input"
                      className="form-control"
                      placeholder="City *"
                      required
                      name="city"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Address *"
                      required
                      name="address"
                    ></textarea>
                  </div> 
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btnSubmit"
                      value="Register"
                    />
                  </div>
                  <div className="form-group">
                    {/* <Link to="#" className="ForgetPwd" value="Login">
                    
                  </Link> */}
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

const mapDispatchToProps = dispatch => {
  return {
    register: (data) => dispatch(register(data)),
   
  }
}

export default connect(null, mapDispatchToProps)(MembeRegister);
