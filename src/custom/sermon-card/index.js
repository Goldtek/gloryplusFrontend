/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import * as $ from "jquery";

// import "./audioplayer.css";

class SectionCard extends React.Component {
  download = () => {
    const { user } = window.sessionStorage.getItem("user");
    if (user === undefined) {
      console.log("user is", user);
      //  return window.$('#modalBox').modal('show');
    }
    //  console.log('user object', user);
  };
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
                <source src={src} type="video/mp4" />
                <source src={src} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              {/* <iframe allowfullscreen></iframe> */}
            </div>
            <div className="si-content sermon-header">
              <h4>{title.toUpperCase()}</h4>

              <ul className="sermon-info">
                <li>
                  Sermon By: <span>{artist}</span>
                </li>
              </ul>
              <div className="icon-links">
                <a
                  data-tooltip="Download Audio Message"
                  data-tooltip-location="top"
                  data-toggle="modal"
                  data-target="#modalBox"
                >
                  <i className="fa fa-headphones" aria-hidden="true"></i>
                </a>

                <a
                  onClick={this.download}
                  data-tooltip="Download Video Message"
                  data-tooltip-location="top"
                >
                  <i className="fa fa-video" aria-hidden="true"></i>
                </a>

                <a
                  // onClick={this.download}
                  data-tooltip="share link"
                  data-tooltip-location="top"
                >
                  <i className="fa fa-share-alt" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionCard;
