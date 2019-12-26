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
      <div
        id="bootstrap-touch-slider"
        className="carousel bs-slider fade  control-round indicators-line"
        data-ride="carousel"
        data-pause="hover"
        data-interval="false"
      >
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li
            data-target="#bootstrap-touch-slider"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#bootstrap-touch-slider" data-slide-to="1"></li>
          <li data-target="#bootstrap-touch-slider" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper For Slides --> */}
        <div className="carousel-inner" role="listbox">
          {/* <!-- Third Slide --> */}
          <div className="item active">
            {/* <!-- Slide Background --> */}
            <img
              src="img/rev&mumSmile.jpg"
              alt="Bootstrap Touch Slider"
              className="slide-image"
            />
            <div className="bs-slider-overlay"></div>

            <div className="container">
              <div className="row">
                {/* <!-- Slide Text Layer --> */}
                <div className="slide-text slide_style_left">
                  <h1 data-animation="animated zoomInRight">
                    GLORYPLUS INTERNATIONAL
                  </h1>
                  <p data-animation="animated fadeInLeft">
                    A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE
                  </p>
                  <Link
                    to="/login"
                    className="btn btn-default"
                    data-animation="animated fadeInLeft"
                  >
                    JOIN US
                  </Link>
                  <Link
                    to="/live"
                    className="btn btn-primary"
                    data-animation="animated fadeInRight"
                  >
                    LIVESTREAM
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End of Slide --> */}

          {/* <!-- Second Slide --> */}
          <div className="item">
            {/* <!-- Slide Background --> */}
            <img
              src="img/rev&mum.jpg"
              alt="Bootstrap Touch Slider"
              className="slide-image"
            />
            <div className="bs-slider-overlay"></div>
            {/* <!-- Slide Text Layer --> */}
            <div className="slide-text slide_style_center">
              <h1 data-animation="animated flipInX">LIVING IN GOD'S GLORY</h1>
              <p data-animation="animated lightSpeedIn">
                HIS GLORY IS MADE MANIFEST IN HIS PEOPLE
              </p>
              <Link
                to="#"
                className="btn btn-default"
                data-animation="animated fadeInUp"
              >
                JOIN US
              </Link>
              <Link
                to="/live"
                className="btn btn-primary"
                data-animation="animated fadeInDown"
              >
                LIVESTREAM
              </Link>
            </div>
          </div>
          {/* <!-- End of Slide --> */}

          {/* <!-- Third Slide --> */}
          <div className="item">
            {/* <!-- Slide Background --> */}
            <img
              src="img/mainChurch.jpg"
              alt="Bootstrap Touch Slider"
              className="slide-image"
            />
            <div className="bs-slider-overlay"></div>
            {/* <!-- Slide Text Layer --> */}
            <div className="slide-text slide_style_right">
              <h1 data-animation="animated zoomInLeft">
                HIS GLORY IS MADE MANIFEST IN HIS PEOPLE
              </h1>
              <p data-animation="animated fadeInRight">
                A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE
              </p>
              <Link
                to="#"
                target="_blank"
                className="btn btn-default"
                data-animation="animated fadeInLeft"
              >
                JOIN US
              </Link>
              <Link
                to="/live"
                className="btn btn-primary"
                data-animation="animated fadeInRight"
              >
                LIVESTREAM
              </Link>
            </div>
          </div>
          {/* <!-- End of Slide --> */}
        </div>
        {/* <!-- End of Wrapper For Slides --> */}

        {/* <!-- Left Control --> */}
        <Link
          className="left carousel-control"
          to="#bootstrap-touch-slider"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-angle-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </Link>

        {/* <!-- Right Control --> */}
        <Link
          className="right carousel-control"
          to="#bootstrap-touch-slider"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-angle-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
    );
  }
}

export default Hero;
