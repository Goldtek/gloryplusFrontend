import React from "react";
const ImgDiv = ({ img, caption }) => {
  return (
    <div className="card event-slide-img">
      <a href={img} data-fancybox="gallery" data-caption={caption}>
        <img className="img-responsive thumbnail" src={img} alt="" />
      </a>
    </div>
  );
};

export default ImgDiv;
