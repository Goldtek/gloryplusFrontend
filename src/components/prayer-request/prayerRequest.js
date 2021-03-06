import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  Header,
  TopNav,
  Footer,
  NewsLetter,
  PageInfo,
  PrayerRequest,
} from '../../custom';

class PrayerRequestComponent extends Component {
  render() {
    return (
      <>
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
        <div style={{ minHeight: '75vh' }} className="welcomediv">
          <PrayerRequest />
        </div>
        <NewsLetter />
        <Footer />
      </>
    );
  }
}

export default PrayerRequestComponent;
