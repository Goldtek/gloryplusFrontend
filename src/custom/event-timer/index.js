import React, { Component } from "react";
import Countdown from "../countdown";
import TextTruncate from "react-text-truncate";
import Modal from "./modal";
import moment from "moment";
import axios from "axios";
const quoteAPI = "https://beta.ourmanna.com/api/v1/get/?format=text";
// import { Link } from "react-router-dom";

class EventTimer extends Component {
  /*BIBLE QOUTE */
  state = {
    bibleQuote: [],
    loading: false
  };
  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios
        .get(quoteAPI)
        .then(res =>
          this.setState({
            loading: false,
            bibleQuote: res
          })
        )
        .catch(err => console.log(err));
    });

    // function truncateString(str, num) {
    // if (str.length <= num) {
    // return str;
    // }
    // return str.slice(0, num) + "...";
    // }
  }

  /*BIBLE QOUTE */
  render() {
    const { bibleQuote, loading } = this.state;
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

                {loading ? (
                  <p>
                    <i className="fa fa-bible"></i> bible quote
                    <i className="fas fa-spinner fa-pulse"></i> Loading
                  </p>
                ) : (
                  <section>
                    <TextTruncate
                      line={1}
                      element="p"
                      truncateText="…"
                      text={bibleQuote.data}
                      textTruncateChild={
                        <a
                          href="!#"
                          data-toggle="modal"
                          data-target="#myModal-2"
                        >
                          read more
                        </a>
                      }
                    />

                    <Modal />
                  </section>
                )}
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              {/* <!-- counter --> */}
              <Countdown
                timeTillDate={countDown}
                timeFormat="MM DD YYYY, h:mm a"
              />
            </div>
          </div>
        </div>
      </section>
      // <!-- Event section end -->
    );
  }
}

export default EventTimer;
