import React, { Component } from "react";

class LiveStream extends Component {
  render() {
    let url = "https://www.facebook.com/gloryplusintl/videos/1154911528047687/";
    return (
      <div className="container">
        <div className="container-fostrap">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-1 col-md-1">
                  <div className="card"></div>
                </div>
                <div className="col-xs-12 col-sm-10 col-md-10">
                  <div className="card">
                    <div className="card-content">
                      <div
                        className="fb-video"
                        data-href={url}
                        data-width="1000"
                        data-show-text="false"
                        data-allowfullscreen="true"
                      ></div>
                    </div>
                    <div className="card-read-more">
                      <a href="/live" className="btn btn-link btn-block">
                        We are <b className="text-danger">Live</b> Holy Ghost
                        Morning
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-1 col-md-1">
                  <div className="card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveStream;
