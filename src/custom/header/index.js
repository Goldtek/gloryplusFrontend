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
      <div className="navik-header header-shadow">
        <div className="container">
          <div className="navik-header-container">
            <div
              className="logo"
              data-mobile-logo="img/logo2.png"
              data-sticky-logo="img/logo2.png"
            >
              <a href="#!">
                <img src="img/logo2.png" alt="logo" />
              </a>
            </div>

            <div className="burger-menu">
              <div className="line-menu line-half first-line"></div>
              <div className="line-menu"></div>
              <div className="line-menu line-half last-line"></div>
            </div>

            <nav className="navik-menu menu-caret submenu-top-border submenu-scale">
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
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
