import React, { Component, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./gallery.css";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  Galleries
  // Space
} from "../../custom";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Gallery extends Component {
  state = {
    galleryData: [],
    loading: false // will be true when ajax request is running
  };

  componentWillMount() {
    // axios
    //   .get("./db/galleryData.json")
    //   .then(({ data: galleryData }) => {
    //     this.setState({ galleryData });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    this.setState({ loading: true }, () => {
      axios.get("./utils/galleryData.json").then(result =>
        this.setState({
          loading: false,
          galleryData: [...result.data]
        })
      );
    });
  }
  render() {
    const { galleryData, loading } = this.state;
    // console.log(this.state);
    return (
      <Fragment>
        <Helmet>
          <title>Gallery</title>
          <meta name="description" content=" gallery" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Gallery" bgPicture="url(img/bg.jpg)" />
        {/* <div style={{ minHeight: "25vh" }}>
          <Galleries galleries={galleryData} />
        </div> */}

        <section className="spad-gallery" style={{ minHeight: "24vh" }}>
          {loading ? (
            <div style={{ minHeight: "25vh" }}>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                {" "}
                <FadeLoader
                  css={override}
                  sizeUnit={"px"}
                  size={50}
                  color={"#b42b2b"}
                  height={25}
                />
              </div>
              <div className="col-md-4"></div>
            </div>
          ) : (
            // <GroupList homechurchInfo={groupInfo} />
            <>
              <Galleries galleries={galleryData} />
            </>
          )}
        </section>

        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}
export default Gallery;
