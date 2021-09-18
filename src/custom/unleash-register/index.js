/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { ToastContainer, toast } from 'react-toastify';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import emailjs from 'emailjs-com';
import { connect } from 'react-redux';
import { register } from '../../actions';
import { auth, firestore } from '../firebase';

const MembeRegister = () => {
  const history = useHistory();
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorDisplayed, setError] = useState(false);
  const [viewLocation, setViewLocation] = useState('');
  const [category, setCategory] = useState('');
  const amount = viewLocation === 'online' ? 2000 : 1000;

  const generateRandomString = () => {
    const base = 'UNLEASH';
    const now = new Date().getTime();
    const shuffle = (v) => [...v].sort((_) => Math.random() - 0.5).join('');
    return base + now + shuffle('GLORYPLUSHINTERNATIONALUNLEASHTHEGIANTS').slice(3, 9);
  };

  const config = {
    public_key: 'FLWPUBK-1015c516ef299161a68606c4fbe3db36-X',
    //public_key: 'FLWPUBK_TEST-d4b41ed6db2e7497259993577dc1101f-X', // test
    tx_ref: Date.now(),
    amount,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email,
      phone_number: phone,
      name,
    },
    customizations: {
      title: 'Unleash',
      description: 'Payment for  Unleash',
      logo: 'https://res.cloudinary.com/dvxptc5uy/image/upload/v1615927027/images/admin-login_tgjzep.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const regValues = serializeForm(e.target, { hash: true });
      const {
        email,
      } = regValues;
      if (name === '') {
        toast.error('Please enter your fullname', {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      if (viewLocation === '') {
        toast.error('Please select your viewing Location', {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      if (category === '') {
        toast.error('Please select your category', {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      if (coordinates.latitude !== null && coordinates.longitude !== null) {
        regValues.coordinates = coordinates;
      }
      const code = generateRandomString();
      if (viewLocation === 'online') {
        regValues.code = code;
      }
      regValues.category = category;
      regValues.location = viewLocation;
    
      handleFlutterPayment({
        callback: async (response) => {
          if (response.status === 'successful') {
            response.createdAt = Date.now();
            delete response.redirectstatus;
            delete response.customer.name;
            response.code = code;
            await firestore.collection('payments').add(response);
            if (viewLocation === 'online') {
              await auth.createUserWithEmailAndPassword(email, code);
            }
            await firestore.collection('unleash').add(regValues);
            const form_data = {
              code,
              name,
              email,
              email_to: email,
            };
      
            if (viewLocation === 'online') {
              emailjs.send('Generate@23', 'template_eytgvci', form_data, 'user_BGwAtNiA3jkrgfvVmc02G')
                .then((result) => {
                  console.log('email response success', result.text);
                }, (error) => {
                  console.log('email response error', error.text);
                });
            } else {
              emailjs.send('Generate@23', 'template_81dscxr', form_data, 'user_BGwAtNiA3jkrgfvVmc02G')
                .then((result) => {
                  console.log('email response success', result.text);
                }, (error) => {
                  console.log('email response error', error.text);
                });
            }
            toast.success('Your registration is successful, Please check your email for more details.', {
              position: 'top-right',
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            history.push('/unleash/login');
          }

          closePaymentModal();
        },
      });

     
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        // "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key=***"
        console.log({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      (error) => {
      // for when getting location results in an error
        if (!errorDisplayed) {
          toast.error('Please allowed access to system location', {
            position: 'top-right',
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setError(true);
        }
      },
    );
  } else {
    toast.error('geolocation is not enabled on this browser', {
      position: 'top-right',
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="container ">
      <div className="col-md-12 col-sm-12 col-lg-12 mt-5 login-div">
        <div className="container login-container">
          <div className="row" style={{ backgroundColor: 'rgb(4,24,51' }}>
            <div className="col-md-6 " style={{ margin: 0, backgroundColor: 'rgb(4,24,51' }}>
              <img src="/img/reg.jpg" alt="unleash-logo" style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
            </div>

            <div className="col-md-6 login-form-2">
              <h4 style={{ color: 'white' }}> Unleash Online Viewers Registration</h4>
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <input
                    type="input"
                    className="form-control"
                    placeholder=" FullName *"
                    required
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="input"
                    className="form-control"
                    placeholder="Phone number*"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                    required
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>


                <div className="form-group">
                  <select className="form-control select2-hidden-accessible" name="category" onChange={(e) => setCategory(e.target.value)} required="" data-select2-id="category" tabIndex="-1" aria-hidden="true">
                    <option data-select2-id="4">Select Category</option>
                    <option value="overseer">General Overseer</option>
                    <option value="pastor">Pastor</option>
                    <option value="minister">Minister</option>
                    <option value="worker">Church Worker</option>
                  </select>
                </div>

                <div className="form-group">
                  <select className="form-control select2-hidden-accessible" name="category" onChange={(e) => setViewLocation(e.target.value)} required="" data-select2-id="category" tabIndex="-1" aria-hidden="true">
                    <option data-select2-id="4">Select Location</option>
                    <option value="online">Online (Live Stream)</option>
                    <option value="onsite">OnSite</option>
                  </select>
                </div>


                <div className="form-group">
                  <input
                    type="submit"
                    className="btn-color-unleash btn btn-danger"
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
      <ToastContainer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(register(data)),

});

export default connect(null, mapDispatchToProps)(MembeRegister);
