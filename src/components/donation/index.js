import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  Donation
} from "../../custom";
class DonationComponent extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Donate</title>
          <meta name="description" content="donate" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title="Donate"
          bgPicture="url(img/bg-info/harvest-time.jpg)"
        />
        <Donation />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default DonationComponent;
