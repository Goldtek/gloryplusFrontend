import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";
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
              <li className="nav-pills">
                <NavLink activeClassName={"active"} exact to="/">
                  Home
                </NavLink>

                {/* <a href="/">Home</a> */}
              </li>
              <li className="nav-pills">
                {/* <a href="/about">About Us</a> */}
                <NavLink activeClassName={"active"} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-pills">
                {/* <a href="/sermon">Sermons</a> */}
                <NavLink activeClassName={"active"} to="/sermon">
                  Sermon
                </NavLink>
              </li>
              <li className="nav-pills">
                <a href="event.html">Event</a>
              </li>
              <li className="nav-pills">
                <NavLink activeClassName={"active"} to="/cell">
                  Cell
                </NavLink>
              </li>
              <li className="nav-pills">
                {/* <a href="/sermon">Sermons</a> */}
                <NavLink activeClassName={"active"} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
