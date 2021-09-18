/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'underscore';
import { addItemToCart } from '../../actions/cart';

// import "./audioplayer.css";
import './style.css';

const SermonCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    sermon,
  } = props;
  const { user } = useSelector((state) => ({ user: state.User }));
  const { cart } = useSelector((state) => ({ cart: state.Cart }));
  const {
    unregistered_user, user: Registered_user, isset, isAuthenticated,
  } = user;

  const addTocart = () => {
    dispatch(addItemToCart(sermon));
    history.push('/cart');
  };
  
  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };


  return (
    <div>
      <div className="col-sm-6 col-md-4">
        <div className="sermon-item event-div ">
          <div className="embed-responsive embed-responsive-4by3 card">
            <video
              controls
              poster={sermon.sermonImg}
              className="embed-responsive-item "
            >
              <source src={sermon.src} type="video/mp4" />
              <source src={sermon.src} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="si-content sermon-header">
            <h4>{sermon.title.toUpperCase()}</h4>

            <ul className="sermon-info">
              <li>
                Sermon By:
                {' '}
                <span>{sermon.artist}</span>
              </li>
            </ul>
            <div className="">
              {(Registered_user.isSubscribed) ? (
                <a
                  type="button"
                  className="btn btn-color btn-danger"
                  data-tooltip={`Download ${sermon.title}`}
                  data-tooltip-location="top"
                  target="_blank"
                  href="https://res.cloudinary.com/dvxptc5uy/video/upload/v1587482352/AUD-20200421-WA0018_s4fpxm.mp3"
                >
                  <i className="fa fa-headphones" aria-hidden="true" />
                  {' '}
                  Download
                </a>
              ) : (
                <>
                  <button type="button" onClick={addTocart} className="btn btn-primary btn-color">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    {' '}
                    Add To Cart
                  </button>
                  {'     '}
                  <Link to="/pricing" class="btn btn-primary btn-color">
                    <i className="fa fa-money" aria-hidden="true" />
                    {' '}
                    Subscribe
                  </Link>
                </>
              )}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonCard;
