import React, { Component } from "react";
import sermon_gb from "../../img/sermon-bg.jpg";
class Sermon extends Component {
  render() {
    return (
      <section className="sermon-section spad">
        <div className="section-title">
          <span>Experience God's Presence</span>
          <h2>Sermon Today</h2>
        </div>
        <div className="sermon-warp">
          <div className="sermon-left-bg set-bg" data-setbg={sermon_gb}></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-6">
                <div className="sermon-content">
                  <h2>Lord Is Sufficient For All Of Our Needs</h2>
                  <ul className="sermon-info">
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
                    world, but to save the world through him.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia dese mollit anim id est laborum. Sed ut
                    perspiciatis unde omnis iste.
                  </p>
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
      </section>
    );
  }
}

export default Sermon;
