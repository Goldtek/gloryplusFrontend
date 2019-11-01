import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    /**** change the link to that of react based on routing */
    return (
      <header className="header-section">
        <div className="container">
          <Link to="/">
            {" "}
            <img src="img/logo2.png" alt="" className="site-logo" />
          </Link>
          {/* <a href="index.html" className="site-logo">
           
          </a> */}
          <a href="/" className="site-btn hidden-xs">
            member login
          </a>

          <div className="nav-switch">
            <i className="fa fa-bars"></i>
          </div>
          <nav className="main-menu">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
                {/* <a href="/">Home</a> */}
              </li>
              <li>
                {/* <a href="/about">About Us</a> */}
                <Link to="/about">About</Link>
              </li>
              <li>
                {/* <a href="/sermon">Sermons</a> */}
                <Link to="/sermon">Sermon</Link>
              </li>
              <li>
                <a href="/events">Event</a>
              </li>
              <li>
                <a href="/groups">Small Groups</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
