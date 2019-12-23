import React from "react";
import * as moment from "moment";
import "moment/locale/pt-br";

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      //   console.log(moment.locale("en")); // en
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="counter">
        <div className="counter-item">
          <h4>{days}</h4>Days
        </div>
        <div className="counter-item">
          <h4>{hours}</h4>hours
        </div>
        <div className="counter-item">
          <h4>{minutes}</h4>Mins
        </div>
        <div className="counter-item">
          <h4>{seconds}</h4>secs
        </div>
      </div>
    );
  }
}

export default Countdown;
