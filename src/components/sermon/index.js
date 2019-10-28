import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  BottomNav,
  JoinUs,
  ServiceSection,
  NewsLetter,
  Footer,
  PastorSection,
  Sermon,
  PageInfo
} from "../../custom";

class SermonComponent extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Sermon</title>
          <meta name="description" content="Home " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo />
        <Sermon />
      </Fragment>
    );
  }
}

export default SermonComponent;
