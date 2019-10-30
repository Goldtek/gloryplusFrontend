import React, { Component } from "react";
import EventItem from "../event-item";

class UpcomingEvent extends Component {
  render() {
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
          <div className="event-list">
            <EventItem
              title="Holy Ghost Morning"
              imagePath="img/event/1.jpg"
              description="It will be a time for encounter, at holy ghost morning on thursday, Are you believing 
              God for a miracle in your health, business, career, marriage, finances etc. This is your appointed time!!! The lead pastor
              Rev Dubus Achufusi of Gloryplus International Assembly will be LIVE, you can always stream the event live."
              day="31"
              month="oct"
              time="Thursday, 8:00am"
              location="De Saintago milan Hotel, festac"
            />
            <EventItem
              title="Pacesetting Ladies of GloryPlus"
              imagePath="img/event/2.jpeg"
              description="I dare to be different, i dare to be a pace setter, want to be taught, equipped and empowered to become a
               voice, then you have to be in this meeting, i can assure you that this meeting will be a destiny moulding meeting.
               God is set to do great things with us, through us and for us. So please, no wooman should plan to miss this meeting. "
              day="02"
              month="Nov"
              time="Saturday, 8:00am"
              location="GloryPlus International Assembly"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvent;
