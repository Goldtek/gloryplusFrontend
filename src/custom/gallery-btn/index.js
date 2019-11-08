import React, { Fragment } from "react";

const GalleryBtn = ({ title, filter }) => {
  return (
    <Fragment>
      <button className="btn btn-default filter-button" data-filter={filter}>
        {title.toUpperCase()}
      </button>
    </Fragment>
  );
};
export default GalleryBtn;
