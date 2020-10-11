import React, { Component } from "react";
import SlideImg from "./slides";
import "./style.css";
const content = [
  {
    title: " WELCOME TO CHURCH",
    description: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/slider/rev&mumSmile.jpg",
    direction: "slide-text slide_style_center",
    status: "active"
  },
  {
    title: "LIVING IN GOD'S GLORY",
    description: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/slider/gpa.jpg",
    direction: "slide-text slide_style_left"
  },
  {
    title: "GLORIOUS CHOIR",
    description: "IN HIS PRESENCE THERE IS FULLNESS OF JOY",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/slider/choir1.jpeg",
    direction: "slide-text slide_style_right"
  },
  {
    title: "IN HIS PRESENCE",
    description: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/slider/mainChurch.jpg",
    direction: "slide-text slide_style_left"
  }
];
class Hero extends Component {
  render() {
    return (
      <div className="cont">
      <div
        id="bootstrap-touch-slider"
        className="carousel bs-slider slide  control-round indicators-line"
        data-ride="carousel"
        data-pause="hover"
        data-interval="5000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#bootstrap-touch-slider"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#bootstrap-touch-slider" data-slide-to="1"></li>
          <li data-target="#bootstrap-touch-slider" data-slide-to="2"></li>
          <li data-target="#bootstrap-touch-slider" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          {content.map((item, index) => (
            <SlideImg
              img={item.image}
              key={index}
              status={item.status}
              btn1={item.button1}
              btn2={item.button2}
              title={item.title}
              des={item.description}
              dir={item.direction}
            />
          ))}
        </div>

        <a
          className="left carousel-control"
          href="#bootstrap-touch-slider"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-angle-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="right carousel-control"
          href="#bootstrap-touch-slider"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-angle-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
    );
  }
}

export default Hero;
