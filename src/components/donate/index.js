import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { ToastContainer, toast } from 'react-toastify';
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  firestore,
} from '../../custom';
import './style.css';
import { parseInt } from 'lodash';

const DonateComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');

  const config = {
     public_key: 'FLWPUBK-1015c516ef299161a68606c4fbe3db36-X',
    // public_key: 'FLWPUBK_TEST-d4b41ed6db2e7497259993577dc1101f-X', // test
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
      title,
      description: `Payment for  ${title}`,
      logo: 'https://res.cloudinary.com/dvxptc5uy/image/upload/v1615927027/images/admin-login_tgjzep.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleSubmit = () => {
    let amt = parseInt(amount);
    if (email !== '' || phone !== '' || name !== '' || title !== '' || amt > 0) {
      handleFlutterPayment({
        callback: async (response) => {
          response.createdAt = Date.now();
          delete response.redirectstatus;
          await firestore.collection('payments').add(response);
          closePaymentModal();
        // store in firestore
        },
      });
    } else {
      toast.error('Please fill all fields before proceeding to payment', {
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
      <Helmet>
        <title>Give - Glory Plus International</title>
        <meta name="description" content="give" />
      </Helmet>
      <TopNav />
      <Header />
      <PageInfo
        title="Give to the gospel"
        bgPicture="url(img/bg-info/give.png)"
      />
      {/* <DonateItem /> */}
      <div className="container" style={{ minHeight: '40vh' }}>
        <div className="panel panel-default" style={{ paddingBottom: 50 }}>
          <div className="panel-heading">MAKE YOUR GIVING HERE</div>
          <div className="panel-body">
            <div className="row mt-60">
              <div className="form-group">
                <div className="col-md-6 col-md-offset-2">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user" /></span>
                    <input type="text" className="form-control form-control-lg" name="name" onChange={(e) => setName(e.target.value)} id="fullname" placeholder="Fullname" required="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="form-group">
              <div className="col-md-6 col-md-offset-2">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                  <input type="text" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Email Address" required="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="form-group">
              <div className="col-md-6 col-md-offset-2">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-phone" /></span>
                  <input type="text" className="form-control form-control-lg" name="phone" onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Phone Number" maxLength="13" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="form-group">
              <div className="col-md-6 col-md-offset-2">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-money" /></span>
                  <select className="form-control select2-hidden-accessible" name="title" id="category" onChange={(e) => setTitle(e.target.value)} required="" data-select2-id="category" tabIndex="-1" aria-hidden="true">
                    <option data-select2-id="4">Select a Giving Category</option>
                    <option value="offering">Offering</option>
                    <option value="tithe">Tithe</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {title === 'partnership' && (
          <div className="row mt-60">
            <div className="form-group">
              <div className="col-md-6 col-md-offset-2">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-money" /></span>
                  <select className="form-control select2-hidden-accessible" name="type" id="category" required="" data-select2-id="category" tabIndex="-1" aria-hidden="true">
                    <option data-select2-id="4">Select a Partnership Category</option>
                    <option value="bronze">Bronze NGN 500 - NGN 900 Weekly</option>
                    <option value="silver">Silver NGN 1000 - NGN 4900 Weekly</option>
                    <option value="gold">Gold NGN 5000 - NGN 9900 Weekly</option>
                    <option value="emerald">Emerald NGN 10000 - NGN 14900 Weekly</option>
                    <option value="ruby">Ruby NGN 15000 - NGN 19900 Weekly</option>
                    <option value="pink_diamond">Pink Diaamond NGN 20000 - NGN 24900 Weekly</option>
                    <option value="blue_diamond">BBlue Diamond NGN 25000 - Above Weekly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          )}
          <div className="row mt-60">
            <div className="form-group">
              <div className="col-md-6 col-md-offset-2">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-money" /></span>
                  <input type="text" className="form-control form-control-lg" name="amount" onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Amount" required="" maxLength="15" />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-60">
            <div className="col-md-2 col-md-offset-2">
              <button className="btn btn-success btn-block" onClick={handleSubmit}>Make Payment</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default DonateComponent;
