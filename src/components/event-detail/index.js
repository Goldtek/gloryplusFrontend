import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  EventDetail
} from "../../custom";
class Event_Details extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Live Stream" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Live Stream" bgPicture="url(img/donate.jpg)" />
        <EventDetail />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Event_Details;
