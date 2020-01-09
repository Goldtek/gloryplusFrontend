import React from "react";
// import propTypes from "prop-types";
const SingleGallery = ({ name, subPhotos }) => {
  return (
    <div className="container  gallery-div spad-gallery">
      <h4 align="center">{name.toUpperCase()}</h4>
      <div className="row flex">
        {subPhotos.map(({ photoId, ...pictures }) => (
          <div
            className={`thumbnail col-lg-3 col-md-4 col-sm-12 col-xs-12`}
            key={photoId}
          >
            <div className="content ">
              <a data-fancybox="gallery" href={pictures.photoUrl}>
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src={pictures.photoUrl}
                  alt={name}
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">{name}</h3>
                  <p className="content-text">view image</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// SingleGallery.propTypes = {
//   name: propTypes.string.isRequired,
//   photoUrl: propTypes.string.isRequired
// };
export default SingleGallery;
