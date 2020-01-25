import React from "react";
import { Link } from "react-router-dom";
const ImgDiv = ({ img, caption, url }) => {
  return (
    <div className="card event-slide-img col-md-4 col-lg-4 col-sm-4">
      <Link to={url}>
        <img className="img-responsive" src={img} alt="" />
      </Link>
    </div>
  );
};

export default ImgDiv;
