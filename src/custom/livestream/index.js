import React, { Component } from "react";

class LiveStream extends Component {
  constructor() {
    super();
    this.state = {
      liveStream: "false"
    };
  }
  render() {
    // let url = "https://www.facebook.com/gloryplusintl/videos/1154911528047687/";

    return (
      <div className="container">
        <div className="row row-centered">
          <div className="col-xs-3 col-centered"></div>
          {this.state.liveStream ? (
            <div className="col-xs-12 col-centered">
              <div className="card">
                <div className="card-content">
                  <div className="embed-responsive embed-responsive-16by9 vp-text-alert-wrapper">
                    <div className="vp-alert-text hidden"></div>
                    <div className="vp-alert-time">
                      <div className="vp-live-start-time-title">
                        This event is scheduled for
                      </div>
                      <div className="vp-live-start-time-body">November 14</div>
                      <div className="vp-live-start-time-footer">
                        at 9:45 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-xs-12 col-centered">
              <div className="card">
                <div className="card-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      poster="http://site.com/img.jpg"
                      title="live-stream"
                      className="embed-responsive-item loop controls"
                      src="rtmps://live-api-s.facebook.com:443/rtmp/"
                    ></iframe>
                  </div>
                </div>
                <div className="card-read-more">
                  <a href="/live" className="btn btn-link btn-block">
                    We are <b className="text-danger">Live</b> Holy Ghost
                    Morning
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="col-xs-3 col-centered"></div>
        </div>
      </div>
    );
  }
}

export default LiveStream;
