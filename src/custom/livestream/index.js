import React from "react";

const LiveStream = ({ liveStream }) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     liveStream: false
  //   };
  // }

  // let url = "https://www.facebook.com/gloryplusintl/videos/1154911528047687/";

  return (
    <div className="container spad gallery-div">
      <h4 align="center">Live Service</h4>
      <div className="row row-centered">
        <div className="col-xs-3 col-centered"></div>
        {liveStream.map(({ id, ...livestreamProps }) => (
          <div key={id}>
            {livestreamProps.live ? (
              <div className="col-xs-12 col-centered">
                <div className="card">
                  <div className="card-content">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        src={livestreamProps.streamURL}
                        width="100%"
                        height="100%"
                        className="embed-responsive-item"
                        scrolling="no"
                        allowTransparency="true"
                        allow="encrypted-media"
                        allowFullScreen="true"
                        title={livestreamProps.programTitle}
                      ></iframe>
                    </div>
                  </div>
                  <div className="card-read-more">
                    <a href="/live" className="btn btn-link btn-block">
                      We are <b className="text-danger"> Live </b>
                      {livestreamProps.programTitle}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-xs-12 col-centered">
                <div className="card">
                  <div className="card-content">
                    <div className="embed-responsive embed-responsive-16by9 vp-text-alert-wrapper">
                      <div className="vp-alert-text hidden"></div>
                      <div className="vp-alert-time">
                        <div className="vp-live-start-time-title">
                          This event is scheduled for
                        </div>
                        <div className="vp-live-start-time-body">
                          {livestreamProps.scheduleMonth}{" "}
                          {livestreamProps.scheduleDate}
                        </div>
                        <div className="vp-live-start-time-footer">
                          at {livestreamProps.scheduleTime}
                        </div>
                      </div>
                    </div>
                    <div className="card-read-more">
                      <a href="/live" className="btn btn-link btn-block">
                        No Program is <b className="text-danger"> Live </b>
                        at the moment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="col-xs-3 col-centered"></div>
      </div>
    </div>
  );
};

export default LiveStream;
