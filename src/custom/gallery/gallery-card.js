import React from "react";
// import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function GalleryCard({ galleryId, pathName, coverPix, coverTitle, check }) {
  let classItem;

  if (check.length === 1) {
    classItem = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  } else if (check.length === 2) {
    classItem = "col-lg-6 col-md-6 col-sm-12 col-xs-12";
  } else if (check.length === 3) {
    classItem = "col-lg-4 col-md-4 col-sm-12 col-xs-12";
  } else {
    classItem = "col-lg-3 col-md-3 col-sm-12 col-xs-12";
  }
  return (
    <div className={`${classItem}`} key={galleryId}>
      <div className="content thumbnail">
        <Link href={`/gallery/${pathName}`}>
          <div className="content-overlay"></div>
          <img className="content-image" src={coverPix} alt={coverTitle} />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">{coverTitle}</h3>
            <p className="content-text">view gallery</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GalleryCard;
