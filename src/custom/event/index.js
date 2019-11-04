import React, { Component } from "react";
import moment from "moment";
import { Helmet } from "react-helmet";
import Countdown from "../countdown";
class BottomNav extends Component {
  state = {
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  };

  componentWillUpdate() {}

  render() {
    const d = moment().day(7).fromNow;
    return (
      <section className="event-section">
        <Helmet>
          <title>Event</title>
          <meta name="description" content="Home " />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-6">
              <div className="event-info">
                <div className="event-date">
                  <h2>10</h2>
                  November
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
            <Countdown timeTillDate="11 10 2019, 8:00 am" timeFormat="MM DD YYYY, h:mm a" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BottomNav;
