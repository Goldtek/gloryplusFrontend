import React from "react";

// import "./audioplayer.css";

const SectionCard = ({ artist, sermonImg, title, src }) => {
  console.log("src", src);
  return (
    <div>
      <div className="col-sm-6 col-md-4">
        <div className="sermon-item event-div ">
          <div className="embed-responsive embed-responsive-4by3 card">
            <video
              controls
              poster={sermonImg}
              className="embed-responsive-item "
            >
              <source src={src} type="video/mp4" />
              <source src={src} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="si-content">
            <h4>{title}</h4>

            <ul className="sermon-info">
              <li>
                Sermon By: <span>{artist}</span>
              </li>

              <li>
                Sermon Title: <span>{title}</span>
              </li>
            </ul>

            <div className="icon-links sermon-links">
              <a
                href="#"
                data-tooltip="donload video"
                data-tooltip-location="top"
              >
                <i class="ti-video-camera"></i>
              </a>

              <a
                href="#"
                data-tooltip="download audio"
                data-tooltip-location="top"
              >
                <i class="ti-headphone"></i>
              </a>

              <a
                href="#"
                data-tooltip="share sermon"
                data-tooltip-location="top"
              >
                <i class="ti-share-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
