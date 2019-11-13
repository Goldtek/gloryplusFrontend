import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
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
  state = {
    groupInfo: []
  };

  componentDidMount() {
    axios
      .get("./db/groupData.json")
      .then(({ data: groupInfo }) => {
        this.setState({ groupInfo });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { groupInfo } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Group</title>
          <meta name="description" content="home church" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Home Church" bgPicture="url(img/homecell.jpg)" />
        <GroupList homechurchInfo={groupInfo} />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default HomeChurch;
