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
        <PageInfo title="Home Church" bgPicture="url(img/homecell.jpg)" />
        <Gallery />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default GallaryImg;
