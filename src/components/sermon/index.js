import React, { Component, Fragment } from "react";
// import axios from "axios";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import { Helmet } from "react-helmet";

import {
  Header,
  TopNav,
  // BottomNav,
  NewsLetter,
  Footer,
  // Sermon,
  PageInfo,
  SermonList
} from "../../custom";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class SermonComponent extends Component {
  state = {
    sermons: [], // will hold the results from our ajax call
    loading: false, // will be true when ajax request is running
    per: 2,
    page: 1,
    totalPages: null
  };

  componentDidMount() {
    //deconstructing the state
    // const { per, page, totalPages, sermons } = this.state;
    // const url = `./utils/sermonData.json?per=${per}&page=${page}`;
    // this.setState({ loading: true }, () => {
    //   axios.get(url).then(response =>
    //     this.setState({
    //       loading: false,
    //       sermons: [...sermons, ...response.data.sermonJson]
    //     })
    //   );
    // });
  }

  render() {
    const { sermons, loading } = this.state;
    console.log(this.state.sermons);
    return (
      <Fragment>
        <Helmet>
          <title>Sermon</title>
          <meta name="description" content="Sermon " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Sermon" bgPicture="url(img/bg-info/bible-phone.png)" />

        <hr />

        {loading ? (
          <div style={{ minHeight: "25vh" }}>
            <div className="col-md-4"></div>
            <div
              className="col-md-4"
              style={{
                marginTop: "35px",
                marginBottom: "20px"
              }}
            >
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
          <SermonList sermon={sermons} />
        )}

        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default SermonComponent;
