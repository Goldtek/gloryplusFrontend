import React, { Component, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./gallery.css";
import { css } from "@emotion/core";
import { DotLoader,ScaleLoader
} from "react-spinners";
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
  text-align:center;
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
        <PageInfo title="Gallery" bgPicture="url(img/bg-info/bg.jpg)" />
        {/* <div style={{ minHeight: "25vh" }}>
          <Galleries galleries={galleryData} />
        </div> */}

        <section className="spad-gallery" style={{ minHeight: "35vh" }}>
          {loading ? (
            <div style={{ minHeight: "22vh" }}>
             
              <div className="loadcontent">
                {" "}
                <ScaleLoader
                  css={override}
                  sizeUnit={"px"}
                 
                  color={"#b42b2b"}
                  height={50}
                  width={5}
                />
              </div>
              
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
