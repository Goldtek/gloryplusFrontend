import React, { Component, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./gallery.css";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  Galleries
  // Space
} from "../../custom";

class Gallery extends Component {
  state = { galleryData: [] };

  componentWillMount() {
    axios
      .get("./db/galleryData.json")
      .then(({ data: galleryData }) => {
        this.setState({ galleryData });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { galleryData } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Gallery</title>
          <meta name="description" content=" gallery" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Gallery" bgPicture="url(img/bg.jpg)" />
        <div style={{ minHeight: "25vh" }}>
          <Galleries galleries={galleryData} />
        </div>
        {/* <Space /> */}
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}
export default Gallery;
