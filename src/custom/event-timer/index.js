import React, { Component } from "react";
import moment from "moment";

import Countdown from "../countdown";
import { Link } from "react-router-dom";

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
      // <!-- Event section -->
      <section className="event-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-6">
              {/* <!-- event info --> */}
              <div className="event-info">
                <div className="event-date">
                  <h2>{dateSunday}</h2>
                  {months[month]}
                </div>
                <h3>Fellowship With Us</h3>
                <p>
                  <i className="fa fa-calendar"></i> 8:00 Am
                  <i className="fa fa-map-marker"></i> 18 kudirat Abiola way,
                  Olusosun, Ikeja, Lagos
                </p>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              {/* <!-- counter --> */}
              <Countdown
                timeTillDate={countDown}
                timeFormat="MM DD YYYY, h:mm a"
              />
              {/* <Link href="" className="site-btn sb-light-line">
                Read more
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      // <!-- Event section end -->
    );
  }
}

export default EventTimer;
