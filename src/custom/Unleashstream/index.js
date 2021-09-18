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
                    src="https://www.youtube.com/embed/live_stream?channel=UCwYO-ovCAgDMqbN74ZUmY8Q&amp;rel=0&amp;modestbranding=1&amp;showinfo=0&amp;loop=1&amp;enablejsapi=1&amp;fs=1&amp;theme=dark&amp;autohide=2"
                    width="100%"
                    height="100%"
                    className="embed-responsive-item"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media"
                    allowFullScreen="true"
                    title={liveStream.programTitle}
                    frameBorder="0"
                  />
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
                  {/* <div className="vp-alert-text hidden" />
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
                  </div> */}
                  <img src="img/evening.png" />
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


      <div className="col-xs-3 col-centered" />
    </div>
  </div>
);

export default LiveStream;
