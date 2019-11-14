import React, { Component, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
// import "./gallery.css";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  SingleGallery
} from "../../custom";
const API = "./db/galleryData.json";

class Gallery extends Component {
  state = { gallery: [] };
  // componentWillMount() {
  //   const pathame = this.props.match.params.id;
  //   axios.get(API).then(({ data: gallery }) => {
  //     this.setState({ gallery });
  //   });

  //   const result = this.state.gallery.filter(
  //     single => single.pathName === `${pathame}`
  //   );

  //   console.log(result);
  // }

  componentDidMount() {
    // const pathame = this.props.match.params.id;
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({ gallery: data });
        // console.log(this.state.gallery);
      })
      .catch(console.log());
  }

  render() {
    const pathID = this.props.match.params.id;
    const { gallery } = this.state;
    const filteredGallery = gallery.filter(filtGallery =>
      filtGallery.pathName.toLowerCase().includes(pathID.toLowerCase())
    );
    // console.log(filteredGallery);
    return (
      <Fragment>
        <Helmet>
          <title>{pathID.charAt(0).toUpperCase() + pathID.slice(1)}</title>
          <meta name="description" content=" gallery" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Gallery" bgPicture="url(img/bg.jpg)" />
        <div style={{ minHeight: "25vh" }}>
          {filteredGallery.map(({ galleryId, ...otherfilters }) => (
            <SingleGallery key={galleryId} {...otherfilters} name={pathID} />
          ))}
        </div>
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Gallery;
