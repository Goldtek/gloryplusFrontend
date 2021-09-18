/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';
import './login.css';
import { auth, firestore } from '../firebase';
import { errorMessage } from '../../actions';


const MemberLogin = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [unleashDocs, setUnleashDocs] = useState('');
  const previous = history.location.state !== undefined ? history.location.state.from : '';
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const loginValues = serializeForm(e.target, { hash: true });
      const { email, password } = loginValues;
      const res = await auth.signInWithEmailAndPassword(email, password);
      const { user: { uid } } = res;
      const snapshot = firestore.collection('unleash').where('code', '==', password).where('email', '==', email).get();
      snapshot.then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          setUnleashDocs(doc.data());
        });
      });
      console.log('uid', uid)
      if (uid) {
        toast.success('Login Successful.', {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return history.push('/unleash/livestream');
      } else {
        toast.error('You have to be registered to stream this meeting Live', {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      setLoading(false);
      console.log('error logging in', error);
      toast.error('Please ensure your Email and Code is correct.', {
        position: 'top-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      errorMessage(error);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container ">
      <div className="col-md-12 col-sm-12 col-lg-12 mt-5 login-div">
        <div className="container login-container">
          <div className="row" style={{ backgroundColor: 'rgb(4,24,51' }}>
            <div className="col-md-6 " style={{ margin: 0, backgroundColor: 'rgb(4,24,51' }}>
              <img src="/img/reg.jpg" alt="unleash-logo" style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
            </div>


            <div className="col-md-6 login-form-2">
              <h3> Login To Stream Unleash</h3>
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
                    placeholder="Your Code *"
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
                  <input type="submit" className="btn btn-danger btn-color-unleash" disabled={loading} value="Login" />

                </div>
                <div className="form-group">
                  {loading ? (
                    <Link to="#" className="ForgetPro" value="Login">
                      Loading ....
                    </Link>
                  )
                    : (
                      <Link to="#" className="ForgetPwd" value="Login">
                        Forgot Password
                      </Link>
                    )}
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
