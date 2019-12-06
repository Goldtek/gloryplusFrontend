import React, { Component, Fragment } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import { Helmet } from "react-helmet";

import {
  Header,
  TopNav,
  // BottomNav,
  NewsLetter,
  Footer,
  Sermon,
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
    total: null,
    per_page: null,
    current_page: null
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get("./utils/sermonData.json").then(sermon =>
        this.setState({
          loading: false,
          sermons: [...sermon.data]
        })
      );
    });
  }

  render() {
    const { sermons, loading } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Sermon</title>
          <meta name="description" content="Sermon " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Sermon" bgPicture="url(img/bible-phone.png)" />
        <Sermon
          title="Doing Big things for God"
          preacher="Rev Dubus Achufusi"
          content="The God we serve is big. He created and designed us to do big things.
His predetermined purpose for creating us was to accomplish great things on earth.God designed you for exploits.
Shake yourself off the dust of limitation and begin to do exploits."
        />
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
