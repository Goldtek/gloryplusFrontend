import React from "react";
import "./event.css";
import { Link } from "react-router-dom";
const EventDetail = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-8">
          <div className="page-header">
            <h1>{props.title}</h1>
            <p>
              <span className="fa fa-map-marker"></span> &nbsp;
              <a href="#">{props.location}</a>&nbsp;&nbsp;
              <span className="fa fa-calendar"></span>&nbsp;{props.day}{" "}
              {props.month} {props.year}
              &nbsp;
              {props.time}
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-8">
          <img
            className="img-responsive"
            src={props.imagePath}
            alt={props.pathName}
          />
          <figcaption className="margin-t-h">{props.pathName}</figcaption>
          <br />
          <p>{props.description}</p>
          <Link to="/events">
            <b className="fa fa-arrow-left"></b> Back
          </Link>
          <hr />
        </div>
        <div className="col-sm-4 col-md-4">
          <div className="well">
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
          </div>

          <div className="list-group margin-b-3">
            <a href="#" className="active list-group-item">
              Category 1
            </a>
            <a href="#" className="list-group-item">
              Category 2
            </a>
            <a href="#" className="list-group-item">
              Category 3
            </a>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">Sidebar panel widget</h4>
            </div>
            <div className="panel-body">
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">Sidebar panel widget</h4>
            </div>
            <div className="panel-body">
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetail;
