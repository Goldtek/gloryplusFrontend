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
          <title>Give - Glory Plus International</title>
          <meta name="description" content="give" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title="Give to the gospel"
          bgPicture="url(img/bg-info/give.png)"
        />
        <DonateItem />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default DonateComponent;
