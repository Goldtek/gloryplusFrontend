import React, { Component } from "react";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";
// import TextTruncate from "react-text-truncate";
import "./nav.css";
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
      <header className="naveader">
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar3"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">
                  <img src="img/logo/logo-full.png" alt="Dispute Bills" />
                </Link>
              </div>
              <div id="navbar3" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <NavLink to="/" exact={true}>
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/group" exact={true}>
                      Home Church
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sermon" exact={true}>
                      Sermon
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/galleries" exact={true}>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/events" exact={true}>
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" exact={true}>
                      About us
                    </NavLink>
                  </li>

                  {/* <li className="dropdown">
                    <a
                      href="#!"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      Partners <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="/login">Login</a>
                      </li>
                      <li>
                        <a href="/login">Register</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <NavLink to="/contact" exact={true}>
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/donate" exact={true}>
                      {" "}
                      Donate <i className="fas fa-hand-holding-heart"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div>
          {/* <div className="event-list">
            <blockquote className="quoted">
              <TextTruncate
                id="newQuote"
                line={2}
                element="p"
                truncateText="…"
                className="text-info"
              />
            </blockquote>
          </div> */}
        </div>
      </header>
    );
  }
}

export default Header;
