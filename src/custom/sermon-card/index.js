import React from "react";
// import ReactPlayer from "react-player";

import "./audioplayer.css";

const SectionCard = ({ artist, sermonImg, title, src }) => {
  console.log("src", src);
  return (
    <div>
      <div className="col-sm-6 col-md-4">
        <div className="sermon-item event-div ">
          {/* <b className={"fa-fa-play video-thumbnail"}></b> */}
          {/* 
          <div
            className="si-thumb set-bg"
            style={{
              backgroundImage: `url(${sermonImg})`
            }}
          ></div> */}
          <div className="embed-responsive embed-responsive-4by3 card">
            <video
              controls
              poster={sermonImg}
              className="embed-responsive-item "
            >
              <source
                // src="video/home.mp4"
                src={src}
                type="video/mp4"
              />
              {/* <source
                    src="https://res.cloudinary.com/ielemson/video/upload/v1580163853/glory-plus/home.mp4_2_ros4xe.mp4"
                    type="video/mp4"
                  /> */}
              <source
                // src="video/home.mp4"
                src={src}
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
            {/* <iframe allowfullscreen></iframe> */}
          </div>
          <div className="si-content">
            <h4>{title}</h4>

            <ul className="sermon-info">
              <li>
                Sermon By: <span>{artist}</span>
              </li>
            </ul>
            <div className="icon-links">
              <a
                href="#"
                data-tooltip="add to cart"
                data-tooltip-location="top"
              >
                <i className="fas fa-shopping-cart fa-md d-inline-block"></i>
              </a>
              {/* <a href="">
                <i className="ti-zip"></i>
              </a> */}
              <a href="#" data-tooltip="download" data-tooltip-location="top">
                <i className="fas fa-download fa-md"></i>
              </a>
              {/* <a href="">
                <i className="fas fa-shopping-cart fa-md"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
