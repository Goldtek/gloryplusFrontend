import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  MemberLogin
} from "../../custom";
class Login extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="login" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Login" bgPicture="url(img/login.png)" />
        <MemberLogin />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Login;
