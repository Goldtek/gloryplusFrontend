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
      <header className="header-section">
        <div className="container">
          <Link to="/">
            {" "}
            <img src="img/logo2.png" alt="" className="site-logo" />
          </Link>

          <Link to="/donate" className="site-btn hidden-xs hidden-sm hidden-md">
            donate <i className="fas fa-hand-holding-heart"></i>
          </Link>

          <div className="nav-switch">
            <i className="fa fa-bars"></i>
          </div>
          <nav className="main-menu">
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>

                {/* <a href="/">Home</a> */}
              </li>

              <li>
                <NavLink exact to="/group">
                  HOME CHURCH
                </NavLink>
              </li>

              <li>
                {/* <a href="/sermon">Sermons</a> */}
                <NavLink exact to="/sermon">
                  Sermon
                </NavLink>
              </li>

              <li>
                <NavLink exact to="/galleries">
                  Gallery
                </NavLink>
              </li>

              <li>
                {/* <a href="/about">About Us</a> */}
                <NavLink exact to="/events">
                  Events
                </NavLink>
              </li>

              <li>
                {/* <a href="/sermon">Sermons</a> */}
                <NavLink exact to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="donate hidden-lg hidden-md raise">
                <NavLink exact to="/contact">
                  Donate <i className="fas fa-hand-holding-heart"></i>
                </NavLink>
              </li>

              <span className="hidden-lg hidden-md">
                {this.state.loggedIn ? (
                  <li>
                    <NavLink exact to="#!">
                      User <i className="fa fa-angle-down"></i>
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink exact to="/login">
                      Login <i class="fa fa-sign-in" aria-hidden="true"></i>
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
