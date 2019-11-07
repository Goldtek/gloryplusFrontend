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
import "./group.css";
class HomeChurch extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Group</title>
          <meta name="description" content="home church" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Home Church" bgPicture="url(img/homecell.jpg)" />
        <GroupList />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default HomeChurch;
