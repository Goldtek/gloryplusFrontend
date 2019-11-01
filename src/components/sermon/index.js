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
  PageInfo,
  SermonList
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
        <PageInfo title="Sermon" />

        <Sermon title="Doing Big things for God" preacher="Rev Dubus Achufusi" content="The God we serve is big. He created and designed us to do big things.
         His predetermined purpose for creating us was to accomplish great things on earth.God designed you for exploits.
        Shake yourself off the dust of limitation and begin to do exploits." />
        <BottomNav />
        <SermonList />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default SermonComponent;
