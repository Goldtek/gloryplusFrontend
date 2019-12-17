import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./slider-animations.css";

// const content = [
//   {
//     title: "WELCOME TO GLORYPLUS INTERNATIONAL",
//     description: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
//     button1: "JOIN US",
//     button2: "LIVESTREAM",
//     image: "img/gpa.jpg"
//   },
//   {
//     title: "LIVING IN GOD'S GLORY",
//     description: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
//     button1: "JOIN US",
//     button2: "LIVESTREAM",
//     image: "img/rev&mumSmile.jpg"
//   },
//   {
//     title: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
//     description: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
//     button1: "JOIN US",
//     button2: "LIVESTREAM",
//     image: "img/mainChurch.jpg"
//   },
//   {
//     title: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
//     description: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
//     button1: "JOIN US",
//     button2: "LIVESTREAM",
//     image: "img/rev&mumDance.jpg"
//   }
// ];

class Hero extends Component {
  render() {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <div className="hc-inner">
            <div id="myCarousel" className="carousel slide">
              {/* <!-- Indicators --> */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              {/* <!-- Wrapper for Slides --> */}
              <div className="carousel-inner">
                <div className="item active">
                  {/* <!-- Set the first background image using inline CSS below. --> */}
                  <div
                    className="fill"
                    style={{
                      backgroundImage: "url('img/gpa.jpg')"
                    }}
                  ></div>
                  <div className="carousel-caption">
                    <h2 className="animated fadeInLeft">
                      GLORY PLUS INTERNATIONAL
                    </h2>
                    <p className="animated fadeInUp">
                      A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE
                    </p>
                    <p className="animated fadeInUp">
                      <Link
                        to="#"
                        className="btn btn-transparent  btn-large btn-slider"
                      >
                        JOIN US
                      </Link>
                      &nbsp;
                      {/* <a
                        href="#"
                        className="btn btn-transparent btn-rounded btn-large"
                      >
                        LIVE STREAM
                      </a> */}
                    </p>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- Set the second background image using inline CSS below. --> */}
                  <div
                    className="fill"
                    style={{
                      backgroundImage: "url('img/mainChurch.jpg')"
                    }}
                  ></div>
                  <div className="carousel-caption">
                    <h2 className="animated fadeInDown">
                      LIVING IN GOD'S GLORY
                    </h2>
                    <p className="animated fadeInUp">
                      HIS GLORY IS MADE MANIFEST IN HIS PEOPLE
                    </p>
                    <p className="animated fadeInUp">
                      <Link
                        to="#"
                        className="btn btn-transparent  btn-large btn-slider"
                      >
                        LIVESTREAM
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- Set the second background image using inline CSS below. --> */}
                  <div
                    className="fill"
                    style={{
                      backgroundImage: "url('img/rev&mumSmile.jpg')"
                    }}
                  ></div>
                  <div className="carousel-caption">
                    <h2 className="animated fadeInDown">
                      HIS GLORY IS MADE MANIFEST IN HIS PEOPLE
                    </h2>
                    <p className="animated fadeInUp">LIVING IN GOD'S GLORY</p>
                    <p className="animated fadeInUp">
                      <Link
                        to="#"
                        className="btn btn-transparent  btn-large btn-slider"
                      >
                        LIVESTREAM
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Controls --> */}
              <Link
                className="left carousel-control"
                to="#myCarousel"
                data-slide="prev"
              >
                <span className="icon-prev"></span>
              </Link>
              <Link
                className="right carousel-control"
                to="#myCarousel"
                data-slide="next"
              >
                <span className="icon-next"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
