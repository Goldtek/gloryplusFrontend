/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import {
  firestore,
  TopNav,
  Header,
  PageInfo,
  Footer,
  NewsLetter,
} from '../../custom';

import './styles.css';
import Error from '../../custom/prayer-request/Error';


const validationSchema = Yup.object().shape({
  fname: Yup.string()
    .required('Please enter your name'),

  email: Yup.string()
    .email('Please be a valid email address')
    .required('Please enter an email'),
  phone: Yup.string()
    .required('Please enter your phone numbber'),
});

const Checkout = () => {
  const { cart } = useSelector((state) => ({ cart: state.Cart }));
  const { user } = useSelector((state) => ({ user: state.User }));
  const {
    user: Registered_user, isAuthenticated,
  } = user;

  const history = useHistory();
  const [name, setName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { items, totalPrice } = cart.cart;
  console.log('Registered_user', Registered_user);
  const config = {
     public_key: 'FLWPUBK-1015c516ef299161a68606c4fbe3db36-X',
   // public_key: 'FLWPUBK_TEST-d4b41ed6db2e7497259993577dc1101f-X', // test
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: isAuthenticated ? Registered_user.email : emailAddress,
      name: isAuthenticated ? Registered_user.name : name,
      phone_number: isAuthenticated ? Registered_user.phone : phone,
    },
    customizations: {
      //   title: props.title,
      //   description: `Payment for  ${props.title}`,
      logo: 'https://res.cloudinary.com/dvxptc5uy/image/upload/v1615927027/images/admin-login_tgjzep.jpg',
    },
  };


  const handleFlutterPayment = useFlutterwave(config);

  const handleResponse = async (response) => {
    if (response.status === 'successful') {
      response.createdAt = Date.now();
      delete response.redirectstatus;
      delete response.customer.name;
      await firestore.collection('payments').add(response);
      history.push('/download');
    }
  };

  const makePayment = () => {
    if (isAuthenticated) {
      handleFlutterPayment({
        callback: async (response) => {
          await handleResponse(response);
          closePaymentModal();
        },
      });
    } else if (emailAddress !== '' && name !== '' && phone !== '') {
      handleFlutterPayment({
        callback: async (response) => {
          await handleResponse(response);
          closePaymentModal();
        },
      });
    } else {
      toast.error('Please enter your Email address and Name', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <TopNav />
      <Header />
      <PageInfo title="Checkout" bgPicture="url(img/bg-info/church-events.png)" />

      <div className="container ">
        <div className="row cart pdTop">
          <div className="container mt-5">
            {isAuthenticated
              ? (
                <div className="col-md-3">
                  <strong>User Information</strong>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>
                            <strong>
                              Name:
                            </strong>
                          </td>
                          <td className="text-default">
                            {`${Registered_user.lastname} ${Registered_user.firstname}`}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              Email:
                            </strong>
                          </td>
                          <td className="text-default">
                            {Registered_user.email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              ) : (
                <div className="col-md-3">
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      phone: '',

                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);

                      setTimeout(() => {
                        resetForm();
                        setSubmitting(false);
                      }, 500);
                    }}
                  >
                    {({
                      values,
                      errors,
                      handleChange,
                      handleBlur,
                      touched,
                      handleSubmit,
                      isSubmitting,
                      resetForm,
                    }) => (
                      <form className="form" onSubmit={handleSubmit}>
                        {/* FIRST NAME && LASTNAME STARTS */}

                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12">
                            <div
                              className="form__wrapper wow fadeInDown"
                              data-wow-delay="0.5s"
                            >
                              <input
                                type="text"
                                id="fname"
                                name="fname"
                                className={
                              touched.fname && errors.fname
                                ? 'form__input error'
                                : 'form__input'
                            }
                                onChange={(name) => {
                                  handleChange(name);
                                  setName(name.target.value);
                                }}
                                onBlur={handleBlur}
                                value={values.fname}
                              />
                              <label className="form__label" htmlFor="First Name">
                                <span className="form__label-content">
                                  Name
                                </span>
                              </label>
                              <Error
                                touched={touched.fname}
                                message={errors.fname}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12">
                            <div
                              className="form__wrapper wow fadeInDown"
                              data-wow-delay="0.5s"
                            >
                              <input
                                type="text"
                                id="phone"
                                name="phone"
                                className={
                              touched.phone && errors.phone
                                ? 'form__input error'
                                : 'form__input'
                            }
                                onChange={(phone) => {
                                  handleChange(phone);
                                  setPhone(phone.target.value);
                                }}
                                onBlur={handleBlur}
                                value={values.phone}
                              />
                              <label className="form__label" htmlFor="Phone">
                                <span className="form__label-content">
                                  Phone Number
                                </span>
                              </label>
                              <Error
                                touched={touched.phone}
                                message={errors.phone}
                              />
                            </div>
                          </div>
                        </div>


                        {/* EMAIL && PHONE NUMBER */}
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12">
                            <div
                              className="form__wrapper wow fadeInDown"
                              data-wow-delay="0.6s"
                            >
                              <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={(email) => {
                                  handleChange(email);
                                  setEmail(email.target.value);
                                }}
                                onBlur={handleBlur}
                                value={values.email}
                                className={
                              touched.email && errors.email
                                ? 'form__input error'
                                : 'form__input'
                            }
                              />
                              <label className="form__label" htmlFor="email">
                                <span className="form__label-content">Email Address</span>
                              </label>
                              <Error
                                touched={touched.email}
                                message={errors.email}
                              />
                            </div>
                          </div>

                        </div>

                      </form>
                    )}
                  </Formik>

                </div>
              )}
            <div className="col-md-7">
              {items.length > 0 ? (
                <table id="cart" className="table table-hover table-condensed">
                  <thead>
                    <tr>
                      <th style={{ width: '50%' }}>Messages</th>
                      <th style={{ width: '10%' }}>Price</th>
                      <th style={{ width: '8%' }}>Quantity</th>
                      <th style={{ width: '10%' }} />
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr>
                        <td data-th="Product">
                          <div className="row">
                            <div className="col-sm-2 hidden-xs"><img src={item.sermonImg} alt="..." className="img-responsive" /></div>
                            <div className="col-sm-10">
                              <strong className="nomargin">{item.title}</strong>
                            </div>
                          </div>
                        </td>
                        <td data-th="Quantity">
                          <input type="number" className="form-control text-center" value="1" />
                        </td>
                        <td data-th="Subtotal" className="text-center">{item.quantity * item.amount}</td>
                      </tr>
                    ))}

                  </tbody>
                  <tfoot>
                    <tr className="visible-xs">
                      <td className="text-center"><strong>Total 1.99</strong></td>
                    </tr>
                    <tr>
                      {!isAuthenticated && (
                      <td>
                        <Link to={{ pathname: '/login', state: { from: 'checkout' } }} className="btn btn-primary btn-block">
                          <i className="fa fa-lock" />
                          {' '}
                          Login
                        </Link>
                      </td>
                      )}
                      <td>
                        <button className="btn btn-success" onClick={makePayment}>
                          <i className="fa fa-money" />
                          &nbsp;
                          Make Payment
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              ) : (
                <div className="card-body cart">
                  <div className="col-sm-12 empty-cart-cls text-center">
                    {' '}
                    <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" />
                    <h3><strong>Your Cart is Empty</strong></h3>
                    {' '}
                    <a href="#" className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Checkout;
