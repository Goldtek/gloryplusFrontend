/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import { config } from '../../lib/util';
import {
  TopNav,
  Header,
  PageInfo,
  Footer,
  firestore,
} from '../../custom';

import './style.css';

const Pricing = () => {
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState(null);
  const [isValueChanged, setValue] = useState(false);
  const { user } = useSelector((state) => ({ user: state.User }));
  const { user: Registered_user, isAuthenticated } = user;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFlutterPayment = useFlutterwave(config(Registered_user, amount, title));

  const subscribe = () => {
    setValue(false);
    console.log('isAuthenticated', isAuthenticated);
    if (isAuthenticated) {
      handleFlutterPayment({
        callback: (response) => {
          if (response.status === 'successful') {
            const startDate = moment().valueOf();
            let endDate = null;
            if (period === 1) {
              endDate = moment().add(30, 'days').valueOf();
            } else if (period === 6) {
              endDate = moment().add(180, 'days').valueOf();
            } else if (period === 12) {
              endDate = moment().add(365, 'days').valueOf();
            }
            const data = {
              amount_paid: response.amount,
              startDate,
              endDate,
              customer: response.customer,
              ref: response.flw_ref,
              transaction_id: response.transaction_id,
              tx_ref: response.tx_ref,
              duration_in_months: period,
            };

            const user_data = { subscription: data, isSubscribed: true };
            console.log('user_data', user_data);
            firestore.collection('users')
              .doc(`${Registered_user.id}`)
              .set(user_data, { merge: true });

            toast.success('Your Subscription has been renewed successfully.', {
              position: 'top-right',
              autoClose: 6000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            const updated_user = { ...Registered_user, isSubscribed: true, user_data };

            dispatch({ type: 'UPDATE_SUBSCRIPTION', user: updated_user });

            closePaymentModal();
            setTimeout(() => history.push('/sermon'), 5000);
          }
        },
      });
    } else {
      toast.error('You need to be Signed-In to subscribe to any of of our packages.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push('/login');
      // store current login and pass it as param to login route
    }
  };

  const setAttributes = (price, text, num) => {
    setAmount(price);
    setTitle(text);
    setValue(true);
    setPeriod(num);
  };

  useEffect(() => {
    if (isValueChanged) {
      subscribe();
    }
  }, [isValueChanged]);


  return (
    <>
      <TopNav />
      <Header />
      <PageInfo title="Subscribe to our packages" bgPicture="url(img/bg-info/church-events.png)" />

      <section className="event-list-section spad">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-2" />
            <div className="col-xs-12 col-md-3">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Bronze
                  </h3>
                </div>
                <div className="panel-body">
                  <div className="the-price">
                    <h1>
                      ₦1000
                      <span className="subscript">/mo</span>
                    </h1>
                    <small>1 month subscription</small>
                  </div>
                  <table className="table">
                    <tr className="lh">
                      <td>
                        1 Account
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Acess to Audio Messages
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        Access to Video Messages
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Notifications of new messages
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        Custom Cloud Services
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Weekly Reports
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        1 Month Duration
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="panel-footer">
                  <button type="button" onClick={() => setAttributes(1000, '1 month subscription', 1)} className="btn btn-primary btn-color">
                    <i className="fa fa-money" aria-hidden="true" />
                    {' '}
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-3">
              <div className="panel panel-success">
                <div className="cnrflash">
                  <div className="cnrflash-inner">
                    <span className="cnrflash-label">
                      MOST
                      <br />
                      POPULR
                    </span>
                  </div>
                </div>
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Silver
                  </h3>
                </div>
                <div className="panel-body">
                  <div className="the-price">
                    <h1>
                      ₦5000
                      <span className="subscript">/mo</span>
                    </h1>
                    <small>6 months subscription</small>
                  </div>
                  <table className="table">
                    <tr className="lh">
                      <td>
                        1 Account
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Acess to Audio Messages
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        Access to Video Messages
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Notifications of new messages
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        Custom Cloud Services
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Weekly Reports
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        6 Months Duration
                      </td>
                    </tr>
                  </table>

                </div>
                <div className="panel-footer">
                  <button type="button" onClick={() => setAttributes(5000, '6 month subscription', 6)} className="btn btn-primary btn-color">
                    <i className="fa fa-money" aria-hidden="true" />
                    {' '}
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-3">
              <div className="panel panel-info ">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Gold
                  </h3>
                </div>
                <div className="panel-body">
                  <div className="the-price">
                    <h1>
                      ₦10,000
                      <span className="subscript">/yr</span>
                    </h1>
                    <small>1 Year subscription</small>
                  </div>
                  <table className="table">
                    <tr className="lh">
                      <td>
                        1 Account
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Acess to Audio Messages
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        Access to Video Messages
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Notifications of new messages
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        Custom Cloud Services
                      </td>
                    </tr>
                    <tr className="active lh">
                      <td>
                        Weekly Reports
                      </td>
                    </tr>
                    <tr className="lh">
                      <td>
                        1 year Duration
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="panel-footer">
                  <button type="button" onClick={() => setAttributes(10000, '1 year subscription', 12)} className="btn btn-primary btn-color">
                    <i className="fa fa-money" aria-hidden="true" />
                    {' '}
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
};
export default Pricing;
