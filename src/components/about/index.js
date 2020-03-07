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
        <PageInfo
          title="About Us"
          bgPicture="url(img/bg-info/aboutus-now.png)"
        />
        <div style={{ minHeight: "25vh" }}>
          <JoinUs />
          <ServiceSection />
          <EventTimer />
          <PastorSection />
        </div>
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default About;
