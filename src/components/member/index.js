import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  // EventTimer,
  // JoinUs,
  // ServiceSection,
  NewsLetter,
  Footer,
  // PastorSection,
  PageInfo
} from "../../custom";

/*---------------
MEMBERS IMPORT
-----------------*/

import { Dashboard } from "../../custom/members";
/*---------------
MEMBERS IMPORT
-----------------*/

class Member extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Partner</title>
          <meta name="description" content="Partner " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Partner" bgPicture="url(img/partner/ourpartner.png)" />
        <div style={{ minHeight: "25vh" }}>
          <Dashboard />
        </div>
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Member;
