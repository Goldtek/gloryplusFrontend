import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  NewsLetter,
  PageInfo,
  BasicForm,
} from "../../custom";

class Basic extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Join Our Basic Academy</title>
          <meta name="testimony" content="Share your testimony" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title="Join Our Basic Academy"
          bgPicture="url(img/bg-info/bg.jpg)"
        />
        <div
          style={{ minHeight: "75vh", maxHeight: "150vh" }}
          className="welcomediv"
        >
          <BasicForm />
        </div>
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Basic;
