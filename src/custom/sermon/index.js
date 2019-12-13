import React from "react";
const Sermon = ({ title, preacher, content, link }) => (
  <section className="sermon-section spad">
    <div className="section-title">
      {/* <span>Experience God's Presence</span> */}
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
              <h2>{title}</h2>
              <ul className="sermon-info">
                <li>
                  Sermon By: <span>{preacher}</span>
                </li>
              </ul>
              <p>{content}</p>
              <div className="icon-links">
               
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
