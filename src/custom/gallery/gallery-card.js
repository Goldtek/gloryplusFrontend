import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const GalleryCard = ({ pathName, galleryId, coverPix, coverTitle }) => {
  let classItem = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
  return (
    <Fragment>
      <div className={`thumbnail ${classItem}`} key={galleryId}>
        <div className="hovereffect ">
          <Link to={`/gallery/${pathName}`}>
            <img className="img-responsive" src={coverPix} alt="" />
          </Link>
          <div className="overlay">
            <h2>{coverTitle}</h2>
            <p className="lead">
              <Link to={`/gallery/${pathName}`}>View More</Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GalleryCard;
