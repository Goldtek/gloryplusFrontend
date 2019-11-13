import React from "react";
import { Link } from "react-router-dom";
const SingleGallery = props => {
  let classItem = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
  return (
    <div className="container  gallery-div">
      <h4 align="center">{props.name.toUpperCase()}</h4>
      <div className="row flex">
        {props.subPhotos.map(({ photoId, ...pictures }) => (
          <div className={`thumbnail ${classItem}`} key={photoId}>
            <div className="hovereffect ">
              <a data-fancybox="gallery" href={pictures.photoUrl}>
                <img src={pictures.photoUrl} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleGallery;
