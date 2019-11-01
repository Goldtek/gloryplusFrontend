import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  NewsLetter,
  PageInfo,
  Contactus
} from "../../custom";

class Cell extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Cell</title>
          <meta name="description" content="Cell" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo />
        <Contactus />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Cell;
