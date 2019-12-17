import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./hero.css";

// import { Link } from "react-router-dom";
// import "./hero.css";
// const imgUrls = [
//   "img/gpa.jpg",
//   "img/mainChurch.jpg",
//   "img/rev&mumSmile.jpg",
//   "img/rev&mumDance.jpg"
// ];
// const texts = [
//   "WELCOME TO GLORYPLUS INTERNATIONAL",
//   "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
//   `LIVING IN GOD'S GLORY`,
//   "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE"
// ];

const content = [
  {
    title: "WELCOME TO GLORYPLUS INTERNATIONAL",
    description: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/gpa.jpg"
  },
  {
    title: "LIVING IN GOD'S GLORY",
    description: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/rev&mumSmile.jpg"
  },
  {
    title: "A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE",
    description: "HIS GLORY IS MADE MANIFEST IN HIS PEOPLE",
    button1: "JOIN US",
    button2: "LIVESTREAM",
    image: "img/mainChurch.jpg"
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
      <section className="hero-section">
        <div className="hero-content">
          <div className="hc-inner">
            <Slider autoplay={3000} className="slider-wrapper">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{
                    background: `url('${item.image}') no-repeat center center`
                  }}
                >
                  <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button>{item.button1}</button>&nbsp;
                    <button>{item.button2}</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
