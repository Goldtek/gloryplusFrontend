import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import TextTruncate from "react-text-truncate";
import "./nav.css";
class Header extends Component {
  state = {
    loggedIn: false,
    liveStream: false,
  };

  render() {
    return (
      <div className="main-header-area">
        <div className="container">
          <div className="getfund-nav-container breakpoint-off">
            <nav
              className="getfund-navbar justify-content-between"
              id="listingNav"
            >
              <a className="nav-brand" href="/">
                <img src="img/logo/logo-full.png" alt="logo" />
              </a>
              <div className="getfund-navbar-toggler">
                {" "}
                <span className="navbarToggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>{" "}
              </div>
              <div className="getfund-menu">
                <div className="getfundcloseIcon">
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>
                <div className="getfundnav">
                  <ul>
                    <li className="space">
                      <NavLink to="/" exact={true} className="sf-with-ul">
                        Home
                      </NavLink>
                    </li>
                    <li className="space">
                      <NavLink to="/group" exact={true} className="sf-with-ul">
                        Fellowship Centers
                      </NavLink>
                    </li>
                    <li className="space">
                      <a className="sf-with-ul" href="#">
                        What We Do
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="/galleries">Gallery</a>
                        </li>
                        <li>
                          <a href="/events">Event</a>
                        </li>
                        <li>
                          <a href="/sermon">Sermon</a>
                        </li>
                      </ul>
                    </li>
                    <li className="space">
                      <NavLink to="/live" exact={true}>
                        liveStream
                      </NavLink>
                    </li>

                    <li>
                      {" "}
                      <a className="sf-with-ul" href="#">
                        Who We Are
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="/about">About us</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </li>
                    <li className="space">
                      <NavLink
                        to="/testify"
                        className="sf-with-ul"
                        exact={true}
                      >
                        Testify
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/prayer-request" exact={true}>
                        Prayer Request
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/give" exact={true} className="give-nav">
                        Give <i className="fas fa-hand-holding-heart"></i>
                      </NavLink>
                    </li>
                    <li className="right-side">
                      <ul>
                        <li>
                          <a className="btn-give" href="/give">
                            Give <i className="fas fa-hand-holding-heart"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
