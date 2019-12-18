import React, { Component } from "react";

import Countdown from "../countdown";
class EventTimer extends Component {
  render() {
    return (
      <section className="event-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-6">
              <div className="event-info">
                <div className="event-date">
                  <h2>15</h2>
                  December
                </div>
                <h3>Fellowship with us</h3>
                <p>
                  <i className="fa fa-calendar"></i> 8:00 Am
                  <i className="fa fa-map-marker"></i> 18 kudirat Abiola way,
                  Olusosun, Ikeja, Lagos
                </p>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <Countdown
                timeTillDate="12 15 2019, 8:00 am"
                timeFormat="MM DD YYYY, h:mm a"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventTimer;
