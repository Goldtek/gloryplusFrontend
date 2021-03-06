/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

const Sermon = ({ popular }) => (
  <section className="sermon-section spad">
    <div className="section-title">
      {/* <span>Experience God's Presence</span> */}
      {console.log(popular.reverse())}
      <h2>Latest Sermon</h2>
    </div>
    <div className="sermon-warp">
      <div
        className="sermon-left-bg set-bg"
        style={{
          backgroundImage: 'url(img/sermon-bg.jpg)'
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-6">
            <div className="sermon-content">
              <ul className="sermon-info">
                <li>
                  Sermon By:
                  {' '}
                  <span />
                </li>
              </ul>
              <p />
              <div className="icon-links">
                <Link to="/">
                  <i className="ti-headphone" />
                </Link>
                <Link to="/">
                  <i className="ti-import" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
    {/* // </div> */}
  </section>
);

export default Sermon;

