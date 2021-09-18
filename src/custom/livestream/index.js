/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import moment from 'moment';

const LiveStream = ({ liveStream }) => (
  <div className="container spad gallery-div">
    <div className="row row-centered">
      <div className="col-xs-3 col-centered" />
      <div classna="yt-cover" />
      <div>
        {liveStream.live ? (
          <div className="col-xs-12 col-centered">
            <div className="card">
              <div className="card-content">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    src={liveStream.streamURL}
                      // src="https://uc6d41d0039abeef60c0e3deba39.dl.dropboxusercontent.com/cd/0/inline/BCJBeM5U6qnM10rzqBQ1aZ7xzM9AkBKQIrOi3X-2XYDuDx_Fyt4-fUegV-jOeyLSJt6uQVBs2WQQOt4kMx42wul45y72IADNXo3W_ayTd42rroiX5fvfO-fYge34_8NdQhg/file#?controls=0"
                    width="100%"
                    height="100%"
                    className="embed-responsive-item"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media"
                    allowFullScreen="true"
                    title={liveStream.programTitle}
                  />
                  {/* <video controls width="100%" height="100%" controlsList="nodownload">
                          <source  src={liveStream.streamURL} type="video/mp4"/>
                  </video> */}
                </div>
              </div>
              <div className="card-read-more">
                <a href="/live" className="btn btn-link btn-block">
                  We are
                  {' '}
                  <b className="text-danger"> Live </b>
                  {liveStream.programTitle}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-xs-12 col-centered">
            <div className="card">
              <div className="card-content">
                <div className="embed-responsive embed-responsive-16by9 vp-text-alert-wrapper">
                  <div className="vp-alert-text hidden" />
                  <div className="vp-alert-time">
                    <div className="vp-live-start-time-title">
                      The next event is scheduled for
                    </div>
                    <div className="vp-live-start-time-body">
                      {liveStream.scheduleMonth}
                      {' '}
                      {liveStream.scheduleDate}
                    </div>
                    <div className="vp-live-start-time-footer">
                      at
                      {' '}
                      {`${moment(`${liveStream.scheduleTime}`, 'HHmmss').format('h:mm')}pm`}
                    </div>
                  </div>
                </div>
                <div className="card-read-more">
                  <a href="/live" className="btn btn-link btn-block">
                    No Program is
                    {' '}
                    <b className="text-danger"> Live </b>
                    at the moment
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {console.log('livestream', liveStream)}

      <div className="col-xs-3 col-centered" />
    </div>
  </div>
);

export default LiveStream;
