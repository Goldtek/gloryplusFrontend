import React, { Component } from "react";
import moment from "moment";

import Countdown from "../countdown";

class EventTimer extends Component {
  render() {
    const nextSunday = new Date(moment().day(7));
    const milli = nextSunday.valueOf();
    const dateSunday = nextSunday.getDate();
    const month = nextSunday.getMonth(); // jan is 0
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const countDownDay = moment(milli).format("MM DD YYYY");
    const countDown = `${countDownDay} 8:00 am`;

    return (
      <section className="event-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-6">
              <div className="event-info">
                <div className="event-date">
                  <h2>{dateSunday}</h2>
                  {months[month]}
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
                timeTillDate={countDown}
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
