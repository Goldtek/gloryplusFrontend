import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Hero,
  Header,
  TopNav,
  BottomNav,
  JoinUs,
  ServiceSection,
  Sermon,
  UpcomingEvent,
  Donate,
  NewsLetter,
  Footer,
  PastorSection,
  PageInfo
} from "../../custom";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>About</title>
          <meta name="description" content="Home " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo />
        <JoinUs />
        <ServiceSection />
        <BottomNav />
        <PastorSection />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default About;
