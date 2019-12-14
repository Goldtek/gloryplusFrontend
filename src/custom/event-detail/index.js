import React from "react";
import "./event.css";
import { Link } from "react-router-dom";
const EventDetail = ({
  title,
  location,
  day,
  year,
  imagePath,
  description,
  pathName,
  time,
  month
}) => {
  return (
    <div className="container spad-custom">
      <div className="row">
        <div className="col-sm-8 col-md-8 el-header">
          <div className="page-header el-date">
            <h1>{title.toUpperCase()}</h1>
            <p>
              <span className="fa fa-map-marker"></span> &nbsp;
              <a href="#">{location}</a>&nbsp;&nbsp;
              <span className="fa fa-calendar"></span>&nbsp;{day} {month} {year}
              &nbsp;
              {time}
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-8">
          <img className="img-responsive" src={imagePath} alt={pathName} />
          {/* <figcaption className="margin-t-h">{pathName}</figcaption> */}
          <br />
          <p>{description}</p>
          <Link to="/events">
            <b className="fa fa-arrow-left"></b> Go Back
          </Link>
          <hr />
        </div>
        <div className="col-sm-4 col-md-4">
          {/* <div className="well">
            <h4 className="margin-t-0">Search</h4>
            <form action="#">
              <div className="input-group">
                <label className="sr-only" for="search-form">
                  Search the site
                </label>
                <input type="text" className="form-control" id="search-form" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="fa fa-search"></span>
                    <span className="sr-only">Search</span>
                  </button>
                </span>
              </div>
            </form>
          </div> */}

         
        </div>
      </div>
    </div>
  );
};
export default EventDetail;
