import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  NewsLetter,
  PageInfo,
  MembershipForm,
} from "../../custom";

class Membership extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Join Our Membership Class</title>
          <meta name="testimony" content="Share your testimony" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title="Join Our Membership Class"
          bgPicture="url(img/bg-info/bg.jpg)"
        />
        <div
          style={{ minHeight: "75vh", maxHeight: "150vh" }}
          className="welcomediv"
        >
          <MembershipForm />
        </div>
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Membership;
