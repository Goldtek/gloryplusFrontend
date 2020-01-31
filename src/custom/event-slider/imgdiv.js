import React from "react";
import { Link } from "react-router-dom";
const ImgDiv = ({ img, caption, url, yr, mnth, time }) => {
  return (
    <div className="card event-slide-img col-md-4 col-lg-4 col-sm-4">
      <div className="content">
        <Link to={url}>
          <div className="content-overlay"></div>
          <img className="content-image" src={img} alt={img} />
          <div className="content-details fadeIn-bottom fadeIn-left">
            <h3>{caption}</h3>
            <p>
              {mnth} {yr} {time}
            </p>
          </div>
        </Link>
      </div>
      {/* <Link to={url}>
        <img className="img-responsive" src={img} alt="" />
      </Link> */}
    </div>
  );
};

export default ImgDiv;
