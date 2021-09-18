import React, { Component, Fragment } from "react";
import {
  Header,
  TopNav,
  Footer,
  NewsLetter,
  PageInfo,
  TestifyForm,
} from "../../custom";

class TestifyComponent extends Component {
  render() {
    return (
      <Fragment>
        <TopNav />
        <Header />
        <PageInfo
          title="Share Your Testimony With Us"
          bgPicture="url(img/bg-info/testify-edit.png)"
        />
        <div
          style={{ minHeight: "75vh", maxHeight: "150vh" }}
          className="welcomediv"
        >
          <TestifyForm />
        </div>
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default TestifyComponent;
