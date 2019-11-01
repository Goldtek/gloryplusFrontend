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

class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Contact Us</title>
          <meta name="description" content="Contact Us " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Contact Us" />
        <Contactus />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactUs;
