import React from "react";
import GalleryCard from "../gallery/gallery-card";
// import GalleryData from "./picture-data";
// const loadData = () => JSON.parse(JSON.stringify(Gallery_API));
const Galleries = ({ galleries }) => {
  // const { galleries } = props;
  return (
    <div className="container gallery-div">
      <h4 align="center">GLORY PLUS GALLERY</h4>
      <div className="row flex">
        {galleries.map(({ galleryId, ...otherProps }) => (
          <GalleryCard key={galleryId} {...otherProps} />
          // <ProductItem key={id} {...otherSEctionProps} />
        ))}
      </div>
    </div>
  );
};

export default Galleries;
