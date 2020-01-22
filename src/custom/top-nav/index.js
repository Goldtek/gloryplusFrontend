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
                <a
                  href="https://www.facebook.com/gloryplusintl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/GloryplusI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-twitter-alt"></i>
                </a>

                <a
                  href="https://www.instagram.com/gloryplusintl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-6 col-xs-12">
              <div
                className="counter-top"
                // style={{ border: "2px solid green" }}
              >
                <h5>Upcoming Event:</h5>
                <Countdown
                  timeTillDate="1 26 2020, 8:00 am"
                  timeFormat="MM DD YYYY, h:mm a"
                />
                <Link
                  to="/event/holyghost-morning"
                  className="top-readmore hidden-sm"
                >
                  readmore
                </Link>
              </div>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-3 hidden-xs">
              <div className="user-input">
                {this.state.loggedIn ? (
                  <NavLink exact to="#!">
                    User <i className="fa fa-angle-down"></i>
                  </NavLink>
                ) : (
                  <NavLink exact to="/login">
                    Login <i class="fas fa-sign-in-alt "></i>
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
