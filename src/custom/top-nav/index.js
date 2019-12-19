import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import moment from "moment";
import Countdown from "../countdown";

class TopNav extends Component {
  state = {
    loggedIn: false,
    liveStream: false
  };
  render() {
    /**** change the link to that of react based on routing and aplying authentication to it */
    // const dayINeed = 7;
    // const today = moment().isoWeekday();
    // console.log('today', today);
    // if (today <= dayINeed) {
    //   return moment().isoWeekday(dayINeed);
    // }

    return (
      <div className="top-nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3 hidden-md hidden-sm hidden-xs">
              <div className="social">
                <Link
                  to="https://www.facebook.com/gloryplusintl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-facebook"></i>
                </Link>
                <Link
                  to="https://twitter.com/GloryplusI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-twitter-alt"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/gloryplusintl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-instagram"></i>
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-7 col-lg-6 ">
              <div className="counter-top">
                <h5>Upcoming Event:</h5>
                <Countdown
                  timeTillDate="12 31 2019, 9:00 pm"
                  timeFormat="MM DD YYYY, h:mm a"
                />
                <Link to="#" className="top-readmore hidden-sm">
                  readmore
                </Link>
              </div>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-3">
              <div className="user-input">
                {this.state.loggedIn ? (
                  <Link to="#">
                    My account <i className="fa fa-user"></i>
                  </Link>
                ) : (
                  <NavLink
                    activeClassName={"active"}
                    to="/login"
                    className="btn btn-danger btn-xs hidden-xs"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
