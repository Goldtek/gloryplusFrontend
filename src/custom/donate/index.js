import React, { Component } from "react";

class Donate extends Component {
  render() {
    return (
      <section
        className="donate-section spad set-bg"
        data-setbg="img/donate-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 donate-content">
              <h2>A Children’s Miracle Network Hospital</h2>
              <ul className="donate-info">
                <li>
                  Sermon From: <span>Vincent John</span>
                </li>
                <li>
                  Categories: <span>God, Pray</span>
                </li>
                <li>
                  <span>On Monday 23 DEC, 2018</span>
                </li>
              </ul>
              <p>
                For God did not send his Son into the world to condemn the
                world, but to save the world through him. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia dese
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.
              </p>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="donate-card">
                <h2>
                  $45.000<span>Remaining to helps</span>
                </h2>
                <div className="donate-progress-bar">
                  <div className="pb-inner">
                    <span>60%</span>
                  </div>
                </div>
                <div className="donate-progress-info">
                  <div className="di-left">
                    Raised: <span>$50,000</span>
                  </div>
                  <div className="di-right">
                    Goal: <span>$95,000</span>
                  </div>
                </div>
                <a href="/" className="site-btn sb-full">
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Donate;
