import React, { Component } from "react";
import moment from "moment";
import { Helmet } from "react-helmet";
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BottomNav;
