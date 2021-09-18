/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { register } from '../../actions';
import { auth, firestore } from '../firebase';


const MembeRegister = () => {
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    const regValues = serializeForm(e.target, { hash: true });
    const { email, password } = regValues;
    auth.createUserWithEmailAndPassword(email, password);
    delete regValues.password;
    firestore.collection('users').add(regValues);
    history.push('/login');
  };

  return (
    <div className="container ">
      <div className="col-md-12 col-sm-12 col-lg-12 mt-5 login-div">
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1 reg">
              <h3>
                <div className="img-logo">
                  <img src="/img/reg.jpg" alt="unleash-logo" />
                </div>
              </h3>
              <form>
                <div className="form-group" />
                <div className="form-group" />
                <div className="form-group" />
                <div className="form-group">
                  <Link to="/login" className="ForgetPwd">
                    Already a member ?
                    {' '}
                    <u>Click here to login</u>
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
              <form onSubmit={handleRegister}>
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
                  />
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
};

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(register(data)),

});

export default connect(null, mapDispatchToProps)(MembeRegister);
