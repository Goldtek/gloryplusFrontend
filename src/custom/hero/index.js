/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SlideImg from './slides';
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import './style.css';

const content = [
  {
    title: '',
    description: 'WELCOME TO CHURCH',
    button1: 'JOIN US',
    button2: 'LIVESTREAM',
    image: 'img/slider/rev&mumSmile.jpg',
    direction: 'slide-text slide_style_left',
    status: 'active',
  },
  {
    description: 'WORSHIP GOD IN THE BEAUTY OF HIS HOLINESS',
    button1: 'JOIN US',
    button2: 'LIVESTREAM',
    image: 'img/slider/worship.jpg',
    direction: 'slide-text slide_style_right',
  },
  {
    description: 'IN HIS PRESENCE THERE IS FULLNESS OF JOY',
    button1: 'JOIN US',
    button2: 'LIVESTREAM',
    image: 'img/slider/choir1.jpeg',
    direction: 'slide-text slide_style_right',
  },
  {
    title: '',
    description: 'THIS IS A PLACE OF WORSHIP',
    button1: 'JOIN US',
    button2: 'LIVESTREAM',
    image: 'img/slider/cong.jpg',
    direction: 'slide-text slide_style_right',
  },

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
            />
            <li data-target="#bootstrap-touch-slider" data-slide-to="1" />
            <li data-target="#bootstrap-touch-slider" data-slide-to="2" />
            <li data-target="#bootstrap-touch-slider" data-slide-to="3" />
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
            <span className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="right carousel-control"
            href="#bootstrap-touch-slider"
            role="button"
            data-slide="next"
          >
            <span className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Hero;
