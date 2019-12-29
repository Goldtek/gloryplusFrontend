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
    return (
      // <!-- header top section -->
      <div className="top-nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3  hidden-xs">
              <div className="social">
                <Link to="#">
                  <i className="ti-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="ti-twitter-alt"></i>
                </Link>
                <Link to="#">
                  <i className="ti-google"></i>
                </Link>
                <Link to="#">
                  <i className="ti-instagram"></i>
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-6 col-xs-12">
              <div
                className="counter-top"
                // style={{ border: "2px solid green" }}
              >
                <h5>Upcoming Event:</h5>
                <Countdown
                  timeTillDate="12 31 2019, 9:00 pm"
                  timeFormat="MM DD YYYY, h:mm a"
                />
                <Link
                  to="/event/cross-over-night"
                  className="top-readmore hidden-sm"
                >
                  readmore
                </Link>
              </div>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-3 hidden-xs">
              <div className="user-input">
                {this.state.loggedIn ? (
                  <NavLink to="#!">
                    User <i className="fa fa-angle-down"></i>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    Login <i className="fa fa-user"></i>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      // <!-- header top section end-->
    );
  }
}

export default TopNav;
