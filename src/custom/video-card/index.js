/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

class VideoCard extends React.Component {
  render() {
    const { sermonImg, src } = this.props;
    return (
      <>
        <div className="col-sm-6 col-md-4">
          <div className="sermon-item event-div">
            <div className="embed-responsive embed-responsive-4by3 card">
              <video
                controls
              //  poster={sermonImg}
                className="embed-responsive-item "
              >
                <source src={src} type="video/mp4" />
                <source src={src} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
        </div>
      </>
    );
  }
}

export default VideoCard;