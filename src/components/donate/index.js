import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  DonateItem
} from "../../custom";
class DonateComponent extends Component {
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
        <DonateItem />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default DonateComponent;
