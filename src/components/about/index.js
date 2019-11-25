import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  EventTimer,
  JoinUs,
  ServiceSection,
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
          <meta name="description" content="About " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="About Us" bgPicture="url(img/aboutus.jpg)" />
        <JoinUs />
        <ServiceSection />
        <EventTimer />
        <PastorSection />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default About;
