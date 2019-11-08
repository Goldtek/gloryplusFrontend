import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class TopNav extends Component {
  render() {
    this.state = {
      loggedIn: false,
      liveStream: true
    };
    /**** change the link to that of react based on routing and aplying authentication to it */

    return (
      <div className="top-nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3 hidden-md hidden-sm hidden-xs">
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
            <div className="col-sm-6 col-md-7 col-lg-6 ">
              <div className="counter-top">
                <h5>Upcoming Event:</h5>
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

                <div className="user-input">
                  {this.state.liveStream ? (
                    <a href="#" className="top-live">
                      Live
                    </a>
                  ) : (
                    <a href="#" className="top-readmore hidden-sm">
                      readmore
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-3">
              <div className="user-input">
                {this.state.loggedIn ? (
                  <a href="#">
                    My account <i className="fa fa-user"></i>
                  </a>
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
