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
          <a href="/donate" className="site-btn hidden-xs">
            Donate
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

              <li className="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ministry <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-pills">
                    <NavLink activeClassName={"active"} to="/group">
                      Home Church
                    </NavLink>
                  </li>
                  <li className="nav-pills">
                    <NavLink activeClassName={"active"} to="/group">
                      Glory Men
                    </NavLink>
                  </li>
                  <li className="nav-pills">
                    <NavLink activeClassName={"active"} to="/group">
                      Pacesetters
                    </NavLink>
                  </li>
                  <li className="nav-pills">
                    <NavLink activeClassName={"active"} to="/gallery">
                      Gallery
                    </NavLink>
                  </li>

                  <li role="separator" className="divider"></li>

                  <li role="separator" className="divider"></li>
                </ul>
              </li>

              <li className="nav-pills">
                {/* <a href="/sermon">Sermons</a> */}
                <NavLink activeClassName={"active"} to="/sermon">
                  Sermon
                </NavLink>
              </li>

              <li className="nav-pills">
                <NavLink activeClassName="active" to="/events">
                  Events
                </NavLink>
              </li>

              {/* <li className="nav-pills">
<NavLink activeClassName={"active"} to="/donate">
Giving
</NavLink>
</li> */}

              <li className="nav-pills">
                {/* <a href="/about">About Us</a> */}
                <NavLink activeClassName={"active"} to="/about">
                  About Us
                </NavLink>
              </li>

              <li className="nav-pills">
                {/* <a href="/sermon">Sermons</a> */}
                <NavLink activeClassName={"active"} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-pills">
                <NavLink activeClassName={"active"} to="/live">
                  LiveStream
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
