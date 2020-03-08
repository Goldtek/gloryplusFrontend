import React from "react";
import { Link } from "react-router-dom";
// import sortBy from "sort-by";
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
          backgroundImage: "url(img/sermon-bg.jpg)"
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-6">
            <div className="sermon-content">
              <ul className="sermon-info">
                <li>
                  Sermon By: <span></span>
                </li>
              </ul>
              <p></p>
              <div className="icon-links">
                <Link to="/">
                  <i className="ti-headphone"></i>
                </Link>
                <Link to="/">
                  <i className="ti-import"></i>
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
