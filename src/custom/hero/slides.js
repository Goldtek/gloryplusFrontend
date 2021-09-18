import React from "react";
import { Link } from "react-router-dom";
function SlideImg({
  img,
  des,
  status,
  dir,
  btn1,
  btn2,
  data_animation,
  title
}) {
  return (
    <div className={`item ${status}`}>
      <img src={img} className="slide-image" alt={img} width="1640" height="2460"/>
      <div className="bs-slider-overlay"></div>

      <div className="container">
        <div className="row">
          <div className={dir}>
            <h1 data-animation="animated zoomInRight">{title}</h1>
            <p data-animation="animated fadeInLeft">{des}</p>
            <Link
              to="/register"
              //   target="_blank"
              className="btn btn-default"
              data-animation="animated fadeInLeft"
            >
              {btn1}
            </Link>
            <Link
              to="/login"
              className="btn btn-primary"
              data-animation="animated fadeInRight"
            >
              {btn2}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideImg;
