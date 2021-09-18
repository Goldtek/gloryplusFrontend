/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  firestore
} from '../';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const subscribe = () => {
    if(email !== ''){
      // 
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <h4>Subscribe For More Update</h4>
          </div>
          <div className="col-sm-8 col-md-5 col-sm-offset-2 col-md-offset-0">
            <form className="newsletter-form">
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              <button onClick={subscribe} className="nl-send-btn">subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default NewsLetter;
