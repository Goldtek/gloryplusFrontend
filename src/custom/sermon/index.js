import React from "react";
import sortBy from "sort-by";
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
              <h2></h2>
              <ul className="sermon-info">
                <li>
                  Sermon By: <span></span>
                </li>
              </ul>
              <p></p>
              <div className="icon-links">
                <a href="/">
                  <i className="ti-link"></i>
                </a>
                <a href="/">
                  <i className="ti-zip"></i>
                </a>
                <a href="/">
                  <i className="ti-headphone"></i>
                </a>
                <a href="/">
                  <i className="ti-import"></i>
                </a>
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
