import React from "react";
import { Link } from "react-router-dom";
const Main = ({ title, img }) => {
  return (
    <div className="col-xs-12 col-sm-4 col-md-3">
      <div className="card">
        <Link className="img-card" to="#">
          <img src={img} alt={img} />
        </Link>
        {/* <div className="card-content">
          <Link to="#"> </Link>

          <p className="">Pay Your Tithe</p>
        </div> */}
        <div className="card-read-more">
          <Link to="#" className="btn btn-link btn-block">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Main;
