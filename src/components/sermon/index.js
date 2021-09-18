import React, { Component, Fragment } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import { Helmet } from "react-helmet";

import { handleError } from '../../lib/util';
import {
  Header,
  TopNav,
  NewsLetter,
  Footer,
  PageInfo,
  SermonList,
  firestore
} from "../../custom";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class SermonComponent extends Component {
  state = {
    sermons: [],
    loading: true 
  };

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = async () => {
    this.setState({ loading: false });
    await firestore.collection('sermons')
      .onSnapshot((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        this.setState({
          loading: false,
          sermons: results
        })
      }, handleError);
  };

  render() {
    const { sermons, loading } = this.state; 
    return (
      <Fragment>
        <Helmet>
          <title>GloryPlus International Sermons - Listen to the word transforming messages straight from the heart of God</title>
          <meta name="description" content="GloryPlus International Messages " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Sermon" bgPicture="url(img/bg-info/bible-phone.png)" />
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
          <SermonList sermons={sermons} />
        )}

        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default SermonComponent;
