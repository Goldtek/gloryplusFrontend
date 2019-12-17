import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./hero.css";
const imgUrls = [
  "img/gpa.jpg",
  "img/mainChurch.jpg",
  "img/rev&mumSmile.jpg",
  "img/rev&mumDance.jpg"
];
const texts = [
  "WELCOME TO GLORYPLUS INTERNATIONAL",
  "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
  `LIVING IN GOD'S GLORY`,
  "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE"
];
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
                      <a
                        href="#"
                        className="btn btn-transparent btn-rounded btn-large"
                      >
                        JOIN US
                      </a>
                      &nbsp;
                      <a
                        href="#"
                        className="btn btn-transparent btn-rounded btn-large"
                      >
                        LIVE STREAM
                      </a>
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
                      <a
                        href="#"
                        className="btn btn-transparent btn-rounded btn-large"
                      >
                        JOIN US &nbsp;
                      </a>
                      <a
                        href="#"
                        className="btn btn-transparent btn-rounded btn-large"
                      >
                        LIVESTREAM
                      </a>
                    </p>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- Set the third background image using inline CSS below. --> */}
                  <div
                    className="fill"
                    style={{
                      backgroundImage: "url('img/rev&mumSmile.jpg')"
                    }}
                  ></div>
                  <div className="carousel-caption">
                    <h2 className="animated fadeInRight">
                      HIS GLORY IS MADE MANIFEST IN HIS PEOPLE
                    </h2>
                    <p className="animated fadeInRight">
                      A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE
                    </p>
                    <p className="animated fadeInRight">
                      <a
                        href="#"
                        className="btn btn-transparent btn-rounded btn-large"
                      >
                        JOIN US
                      </a>
                      <a
                        href="#"
                        className="btn btn-transparent btn-rounded btn-large"
                      >
                        LIVESTREAM
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Controls --> */}
              <a
                className="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span className="icon-prev"></span>
              </a>
              <a
                className="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span className="icon-next"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
