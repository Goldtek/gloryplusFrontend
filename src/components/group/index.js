import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  GroupList
} from "../../custom";
import "./cell.css";
class Cell extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Group</title>
          <meta name="description" content="Cell" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Cell" />
        <GroupList />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Cell;
