import React from "react";
// import EventItem from "../event-item";

const UpcomingEvent = props => {
  return (
    <section className="event-list-section spad">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-title title-left">
              <span>Experience God's Presence</span>
              <h2>Upcoming Events</h2>
            </div>
          </div>
          <div className="col-md-6 text-right event-more">
            <a href="/" className="site-btn">
              view all events
            </a>
          </div>
        </div>
        <div className="event-list">{/* <EventItem /> */}</div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
