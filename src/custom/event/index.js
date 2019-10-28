import React, { Component } from "react";

class BottomNav extends Component {
  render() {
    return (
      <section className="event-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-6">
              <div className="event-info">
                <div className="event-date">
                  <h2>20</h2>
                  may
                </div>
                <h3>Partner with us</h3>
                <p>
                  <i className="fa fa-calendar"></i> 8:00 Am — 10:00 Am{" "}
                  <i className="fa fa-map-marker"></i> Central District, Riga,
                  LV-1050, Latvia
                </p>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="counter">
                <div className="counter-item">
                  <h4>10</h4>Days
                </div>
                <div className="counter-item">
                  <h4>08</h4>hours
                </div>
                <div className="counter-item">
                  <h4>40</h4>Mins
                </div>
                <div className="counter-item">
                  <h4>56</h4>secs
                </div>
              </div>
              <a href="/" className="site-btn sb-light-line">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BottomNav;
