import React from "react";
const EventItem = props => {
  return (
    <>
      {props.events.map(({ id, ...eventData }) => (
        <div className="el-item event-div">
          <div className="row" key={id}>
            <div className="col-md-4 ">
              <div
                className="el-thubm set-bg-event "
                style={{
                  backgroundImage: `url(${eventData.imagePath})`
                }}
              ></div>
            </div>
            <div className="col-md-8 ">
              <div className="el-content txt-pad">
                <div className="el-header">
                  <div className="el-date">
                    <h2>{eventData.day}</h2>
                    {eventData.month}
                  </div>
                  <h3>{eventData.title}</h3>
                  <div className="el-metas">
                    <div className="el-meta">
                      <i className="fa fa-calendar"></i> {eventData.time}
                    </div>
                    <div className="el-meta">
                      <i className="fa fa-map-marker"></i> {eventData.location}
                    </div>
                  </div>
                </div>
                <p>{eventData.description}</p>
                <a href="/" className="btn btn-danger btn-sm">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventItem;
