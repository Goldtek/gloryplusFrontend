import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const GalleryCard = props => {
  let classItem = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
  return (
    <Fragment>
      <div className={`thumbnail ${classItem}`} key={props.galleryId}>
        <div className="hovereffect ">
          <img className="img-responsive" src={props.coverPix} alt="" />
          <div className="overlay">
            <h2>{props.coverTitle}</h2>
            <p className="lead">
              <Link to={`/gallery/${props.pathName}`}>View More</Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GalleryCard;
