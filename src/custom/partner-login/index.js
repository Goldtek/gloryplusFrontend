/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { useDispatch } from 'react-redux';

import './login.css';
import { auth, firestore } from '../firebase';
import { errorMessage, login } from '../../actions';

const apiUrl = process.env.REACT_APP_BASE_URL;

const MemberLogin = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginValues = serializeForm(e.target, { hash: true });
      const { email, password } = loginValues;

      const res = await auth.signInWithEmailAndPassword(email, password);
      const { user: { uid } } = res;
      const doc = await firestore.collection('users').doc(uid).get();
      const user = doc.data();
      // dispatch to the redux and rewrite routing
      if (user) {
        // await auth.currentUser.getIdToken();
        if (user.inSchool) {
          return history.push(`/dashboard/${user.id}`, true);
        }
        return history.push('/courses', true);
      }
    } catch (error) {
      console.log('error logging in', error);
      errorMessage(error);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container ">
      <div className="col-md-12 col-sm-12 col-lg-12 mt-5 login-div">
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1">
              <h3>
                <div className="img-logo">
                  <img src="/img/round-logo.png" alt="gloryplus-logo" />
                </div>
              </h3>
              <form>
                <div className="form-group" />
                <div className="form-group" />
                <div className="form-group" />
                <div className="form-group">
                  <Link to="/register" className="ForgetPwd">
                    Not yet a member ?
                    {' '}
                    <u>click here to join</u>
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-md-6 login-form-2">
              <h3> Login</h3>
              <form onSubmit={handleLogin}>
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
};


export default MemberLogin;
