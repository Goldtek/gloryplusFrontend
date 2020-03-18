import React from "react";

import "./audioplayer.css";

class  SectionCard extends React.Component {
  download = () => {
    alert();
  }
  render() {
    const { artist, sermonImg, title, src } = this.props;
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
              <source
                src={src}
                type="video/mp4"
              />
              
              <source
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
                data-tooltip="Download Audio Message"
                data-tooltip-location="top"
              >
                <i className="fas fa-file-audio fa-md d-inline-block"></i>
              </a>
      
              <a onClick={this.download} data-tooltip="Download Video Message" data-tooltip-location="top">
                <i className="fas fa-video fa-md"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };
};

export default SectionCard;
