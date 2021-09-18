/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';
import './login.css';
import { auth, firestore } from '../firebase';
import { errorMessage } from '../../actions';


const MemberLogin = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const previous = history.location.state !== undefined ? history.location.state.from : '';
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const loginValues = serializeForm(e.target, { hash: true });
      const { email, password } = loginValues;
      const res = await auth.signInWithEmailAndPassword(email, password);
      const { user: { uid } } = res;
      const doc = await firestore.collection('users').doc(uid).get();
      const user = doc.data();

      const startDate = moment().valueOf();
      if (user) {
        const subscription = _.get(user, 'subscription', '');
        const isSubscribed = _.get(user, 'isSubscribed', false);
        const endDate = _.get(subscription, 'endDate', '');

        if (isSubscribed) {
          if (moment(endDate).isAfter(startDate) === false) {
            delete user.subscription;
            user.isSubscribed = false;
            firestore.collection('users').doc(`${uid}`).set(user, { merge: true });
          }
        }
        setTimeout(
          () => {
            dispatch({ type: 'LOGIN_SUCCESS', user });
            setLoading(false);
            if (previous !== undefined || previous !== '') {
              return history.push(`/${previous}`);
            } if (user.inSchool) {
              return history.push(`/dashboard/${user.id}`, true);

              // goto courses after decision is made
            }
            return history.push('/dashboard', true);
          },
          5000,
        );
      }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
      console.log('error logging in', error.message);
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
                  {loading && (
                  <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginLeft: '75px', alignSelf: 'center', color: 'white' }}
                  />
                  )}
                  {!loading && (<input type="submit" className="btnSubmit" value="Login" />)}
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
      <ToastContainer />
    </div>
  );
};


export default MemberLogin;
