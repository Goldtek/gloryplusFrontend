import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  MembeRegister
} from "../../custom";
class Login extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Register</title>
          <meta name="description" content="login" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Login" bgPicture="url(img/donate.jpg)" />
        <MembeRegister />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Login;
