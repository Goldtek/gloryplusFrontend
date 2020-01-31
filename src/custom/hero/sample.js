import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./style.css";

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
      <div>
        <Slider className="slider-wrapper" autoplay={3000}>
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
                <button>{item.button}</button>
              </div>
              {/* <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </section> */}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Hero;
