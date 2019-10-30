import React from "react";

const EventItem = ({
  imagePath,
  title,
  day,
  month,
  description,
  time,
  location
}) => (
  <div className="el-item">
    <div className="row">
      <div className="col-md-4">
        <div
          className="el-thubm set-bg"
          style={{
            backgroundImage: `url(${imagePath})`
          }}
        ></div>
      </div>
      <div className="col-md-8">
        <div className="el-content">
          <div className="el-header">
            <div className="el-date">
              <h2>{day}</h2>
              {month}
            </div>
            <h3>{title}</h3>
            <div className="el-metas">
              <div className="el-meta">
                <i className="fa fa-calendar"></i> {time}
              </div>
              <div className="el-meta">
                <i className="fa fa-map-marker"></i> {location}
              </div>
            </div>
          </div>
          <p>{description}</p>
          <a href="/" className="site-btn sb-line">
            Read more
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default EventItem;
