import React, { Component } from "react";

class SectionCard extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-6 col-md-4">
          <div className="sermon-item">
            <div
              className="si-thumb set-bg"
              style={{
                backgroundImage: "url(img/sermons/1.jpg)"
              }}
            ></div>
            <div className="si-content">
              <h4>Perseverance of the Saints</h4>
              <ul className="sermon-info">
                <li>
                  Sermon From: <span>Vincent John</span>
                </li>
                <li>
                  Categories: <span>God, Pray</span>
                </li>
                <li>
                  <span>On Monday 23 DEC, 2018</span>
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
  }
}

export default SectionCard;
