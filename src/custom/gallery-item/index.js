import React, { Fragment } from "react";

const GalleryItem = ({ img, alt, shuffle, caption }) => {
  return (
    <Fragment>
      <div
        className={`gallery_product col-lg-4 col-md-4 col-sm-12 col-xs-12 filter ${shuffle}`}
      >
        <a
          href={img}
          data-fancybox="gallery"
          data-caption={`${caption}`}
          className="img-fancy"
        >
          <img src={img} className="img-responsive" alt={alt} />
        </a>
      </div>
    </Fragment>
  );
};

export default GalleryItem;
