import React, { Component } from "react";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    $(".nav-switch").on("click", function(event) {
      console.log("toggle");
      $(".main-menu").slideToggle(400);
      event.preventDefault();
    });
  }
  state = {
    loggedIn: false,
    liveStream: false
  };
  render() {
    return (
      // <!-- Header section  -->
      <header className="header-section">
        <div className="container">
          <Link to="/">
            {" "}
            <img src="img/newlogo.png" alt="" className="site-logo" />
          </Link>

          <Link to="/donate" className="site-btn hidden-xs hidden-sm hidden-md">
            donate
          </Link>

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
                <NavLink activeClassName={"active"} to="/group">
                  HOME CHURCH
                </NavLink>
              </li>
              <li className="nav-pills">
                {/* <a href="/sermon">Sermons</a> */}
                <NavLink activeClassName={"active"} to="/sermon">
                  Sermon
                </NavLink>
              </li>

              <li className="nav-pills">
                <NavLink activeClassName="active" to="/galleries">
                  Gallery
                </NavLink>
              </li>

              <li className="nav-pills">
                {/* <a href="/about">About Us</a> */}
                <NavLink activeClassName={"active"} to="/events">
                  Events
                </NavLink>
              </li>

              <li className="nav-pills">
                {/* <a href="/sermon">Sermons</a> */}
                <NavLink activeClassName={"active"} to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-pills">
                <NavLink activeClassName={"active"} to="/contact">
                  Contact
                </NavLink>
              </li>

              <span className="hidden-lg hidden-md">
                {this.state.loggedIn ? (
                  <li className="nav-pills">
                    <NavLink activeClassName={"active"} to="#!">
                      User <i className="fa fa-angle-down"></i>
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-pills">
                    <NavLink to="/login">
                      Login <i className="fa fa-user"></i>
                    </NavLink>
                  </li>
                )}
              </span>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
