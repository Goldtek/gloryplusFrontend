import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  NewsLetter,
  PageInfo,
  PrayerRequest,
} from "../../custom";

class PrayerRequestComponent extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Send us your prayer request-GPI</title>
          <meta name="prayer request" content="we want to pray with you" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title="We want to pray with you"
          bgPicture="url(img/bg-info/pray.jpg)"
        />
        <div style={{ minHeight: "95vh" }} className="welcomediv">
          <PrayerRequest />
        </div>
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default PrayerRequestComponent;
