import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./slider-animations.css";

const content = [
  {
    title: "LIVING IN GOD'S GLORY",
    description: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/rev&mumSmile.jpg",
    fade: "right"
  },
  {
    title: "WELCOME TO GLORYPLUS INTERNATIONAL",
    description: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/.jpg",
    fade: "left"
  },
  {
    title: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
    description: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/.jpg",
    fade: ""
  },
  {
    title: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
    description: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/rev&mumDance.jpg"
  }
];

class Hero extends Component {
  render() {
    return (
      <div
        id="myCarousel"
        className="carousel slide myCarouselSlider"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item bg bg1 active animated slideInDown darken-pseudo">
            <div className="carousel-caption">
              <h1 className="animated zoomInRight slow">{content[0].title}</h1>
              <p className="animated fadeInLeft slow">
                {content[0].description}
              </p>
              <p>
                <Link
                  className="btn btn-md btn-default animated fadeInLeft slower btn-slide"
                  to="/register"
                  role="button"
                >
                  JOIN US
                </Link>
                &nbsp;
                <Link
                  className="btn btn-md btn-danger animated fadeInRight slower btn-slide-red"
                  to="/live"
                  role="button"
                >
                  LIVESTREAM
                </Link>
              </p>
            </div>
          </div>
          <div className="item bg bg2 animated slideInUp">
            <div className="carousel-caption">
              <h1 className="animated zoomInRight slow">{content[1].title}</h1>
              <p className="animated fadeInLeft slow">
                {content[1].description}
              </p>
              <p>
                <Link
                  className="btn btn-md btn-default animated fadeInLeft slower btn-slide"
                  to="/register"
                  role="button"
                >
                  JOIN US
                </Link>
                &nbsp;
                <Link
                  className="btn btn-md btn-danger animated fadeInRight slower btn-slide-red"
                  to="/live"
                  role="button"
                >
                  LIVESTREAM
                </Link>
              </p>
            </div>
          </div>
          <div className="item bg bg3">
            <div className="carousel-caption">
              <h1 className="animated zoomInRight slow">{content[2].title}</h1>
              <p className="animated fadeInLeft slow">
                {content[2].description}
              </p>
              <p>
                <Link
                  className="btn btn-md btn-default animated fadeInLeft slower btn-slide "
                  to="/register"
                  role="button"
                >
                  JOIN US
                </Link>
                &nbsp;
                <Link
                  className="btn btn-md btn-danger animated fadeInRight slower btn-slide-red"
                  to="/live"
                  role="button"
                >
                  LIVESTREAM
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Link
          className="left carousel-control"
          to="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
        </Link>
        <Link
          className="right carousel-control"
          to="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
        </Link>
      </div>
    );
  }
}

export default Hero;
