import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  LiveStream
} from "../../custom";
class LiveStreaming extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Live</title>
          <meta name="description" content="Live Stream" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Live Stream" bgPicture="url(img/donate.jpg)" />
        <LiveStream />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default LiveStreaming;
