import React, { Component, Fragment } from "react";

import { Helmet } from "react-helmet";
import "./gallery.css";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  Gallery
} from "../../custom";
class GallaryImg extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Gallery</title>
          <meta name="description" content=" gallery" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Gallery" bgPicture="url(img/bg.jpg)" />
        <Gallery />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default GallaryImg;
