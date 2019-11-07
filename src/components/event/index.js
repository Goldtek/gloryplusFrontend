import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import {
  TopNav,
  Header,
  PageInfo,
  Footer,
  NewsLetter,
  EventItem
} from "../../custom";

export default class Events extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Events</title>
          <meta name="description" content="Home " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Events" bgPicture="url(img/events.jpg)" />

        <section class="event-list-section spad">
          <div class="container">
            <div class="section-title title-left">
              <span>Experience God's Presence</span>
              <h2>Upcoming Events</h2>
            </div>
            <div class="event-list">
              <EventItem
                title="Pacesetting Ladies of GloryPlus"
                imagePath="img/event/2.jpeg"
                description="I dare to be different, i dare to be a pacesetter, equipped and empowered to become a
                            voice, then you have to be in this meeting, i can assure you that this meeting will be a destiny moulding meeting.
                            God is set to do great things with us, through us and for us. So please, all women , plan to attend. "
                day="02"
                month="Nov"
                time="Saturday, 8:00am"
                location="GloryPlus International Assembly"
              />

              <EventItem
                title="Glorymen Meeting"
                imagePath="img/event/men.png"
                description="This is another day The Lord has made and we rejoice and we are glad in it.
                            All glorious men are expected to be in this meeting to fellowship together. "
                day="02"
                month="Nov"
                time="Saturday, 4:30pm"
                location="GloryPlus International Assembly"
              />

              <EventItem
                title="Tuesday Mid-week Service"
                imagePath="img/event/midweek.png"
                description="Remember it's still our month of supernatural harvest. Join us today for another exciting session as we
                            explore bible secrets on how to access supernatural harvest. See you there!! "
                day="05"
                month="Nov"
                time="Tuesday, 6:00pm"
                location="GloryPlus International Assembly"
              />

              <EventItem
                title="Holy Ghost Morning"
                imagePath="img/event/1.jpg"
                description="It will be a time for encounter, at holy ghost morning on thursday, Are you believing 
                            God for a miracle in your health, business, career, marriage, finances etc. This is your appointed time!!! The lead pastor
                            Rev Dubus Achufusi of Gloryplus International Assembly will be LIVE, you can always stream the event live."
                day="07"
                month="Nov"
                time="Thursday, 8:00am"
                location="De Saintago milan Hotel, festac"
              />

              <EventItem
                title="Singles Movie Night"
                imagePath="img/event/movie.jpeg"
                description="Singles present Movies night at Gloryplus international, red carpet, free popCorn chapman and free gifts to be won."
                day="08"
                month="Nov"
                time="Saturday, 5:00pm"
                location="GloryPlus International Assembly"
              />
            </div>
            <div class="pagination-area">
              <ul class="pageination-list">
                <li>
                  <Link to="#">1</Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">
                    Next <i class="fa fa-angle-double-right"></i>
                  </Link>
                </li>
              </ul>
              <p>Page 1 of 8 results</p>
            </div>
          </div>
        </section>

        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}
