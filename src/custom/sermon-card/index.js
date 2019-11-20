import React from "react";

const SectionCard = ({ title, preacher, time, link, sermonImg }) => (
  <div>
    <div className="col-sm-6 col-md-4">
      <div className="sermon-item event-div video-thumbnail">
        <div
          className="si-thumb set-bg"
          style={{
            backgroundImage: `url(${sermonImg})`
          }}
        ></div>
        <div className="si-content">
          <h4>{title}</h4>
          <ul className="sermon-info">
            <li>
              Sermon By: <span>{preacher}</span>
            </li>

            <li>
              <span>On {time}</span>
            </li>
          </ul>
          <div className="icon-links">
            <a href="">
              <i className="ti-link"></i>
            </a>
            <a href="">
              <i className="ti-zip"></i>
            </a>
            <a href="">
              <i className="ti-headphone"></i>
            </a>
            <a href="">
              <i className="ti-import"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SectionCard;
