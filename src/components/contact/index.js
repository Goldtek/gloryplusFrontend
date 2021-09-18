import React, { Component, Fragment } from "react";
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
        <TopNav />
        <Header />
        <PageInfo
          title="Contact Us"
          bgPicture="url(img/bg-info/red-contact.png)"
        />
        <Contactus />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactUs;
