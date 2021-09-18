import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import { errorMessage } from '../../actions';
import SuccessModal from '../successModal';
import './styles.css';


const GiveModal = (props) => {
  const [amount, setAmount] = useState('');
  const [errorMessage, setError] = useState('');
  const { user } = useSelector((state) => ({ user: state.User }));
  const { unregistered_user, user: Registered_user, isAuthenticated } = user;


  const config = {
    public_key: 'FLWPUBK-1015c516ef299161a68606c4fbe3db36-X',
    tx_ref: Date.now(),
    amount,
    currency: 'NGN',
    payment_options: 'card',
    // customer: {
    //   email: isAuthenticated ? Registered_user.email : unregistered_user.email,
    //   phone_number: isAuthenticated ? Registered_user.phone : unregistered_user.phone,
    //   name: isAuthenticated ? Registered_user.name : unregistered_user.name,
    // },
    // customizations: {
    //   title: props.title,
    //   description: `Payment for  ${props.title}`,
    //   logo: 'https://res.cloudinary.com/dvxptc5uy/image/upload/v1615927027/images/admin-login_tgjzep.jpg',
    // },
  };


  const handleFlutterPayment = useFlutterwave(config);


  const handleSubmit = () => {
    // if ((unregistered_user.email === '' | unregistered_user.name === '' | unregistered_user.phone === '') && isAuthenticated === false) {
    //   console.log('error');
    //   return window.$('#modalBox').modal('show');
    // }

    // setError('');
    $('#closeBtn').click();
    handleFlutterPayment({
      callback: (response) => {
        closePaymentModal();
        // store in firestore
      },
    });
  };


  return (
    <>

      <div id="giveComponent" className="modal fade" role="dialog">
        <div className="modal-dialog modal-md modal-danger  modal-notify">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header" style={{ borderBottom: 'none' }}>
              <button type="button" className="close" data-dismiss="modal" id="closeBtn">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                {errorMessage !== '' ? (
                  <label className="text-danger">
                    {' '}
                    {errorMessage}
                    {' '}
                  </label>
                ) : null}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form__wrapper  " data--delay="0.5s">
                    {/* <Select isSearchable options={options} name="type" /> */}
                    <label className="form-label">{props.title}</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">


                  <div className="form__wrapper  " data--delay="0.5s">
                    <input
                        type="text"
                        className="form__input"
                        id="amount"
                        name="amount"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    <label className="form__label" htmlFor="email">
                        <span className="form__label-content">
                            AMOUNT
                            </span>
                      </label>
                  </div>
                </div>

                <div className="col-xs-6">
                  {' '}
                  <div
                    className="form__wrapper--submit  fadeInLeft"
                    data--delay="0.7s"
                  >
                    <div className="form__input-submit">
                        <button
                            type="submit"
                            className="btn btn-block btn-primary"

                            onClick={() => handleSubmit()}
                          >
                          Submit
                            {' '}
                            <i className="fa fa-paper-plane" aria-hidden="true" />
                          </button>
                      </div>
                  </div>
                </div>

                <div className="col-xs-6">
                  {' '}
                  <div
                    className="form__wrapper--submit  fadeInLeft"
                    data--delay="0.7s"
                  >
                    <div className="form__input-submit">
                        <button
                            className="btn btn-block btn-info"
                            type="button"
                            data-dismiss="modal"
                            id="closeBtn"
                          >
                          Cancel
                            {' '}
                          </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveModal;
