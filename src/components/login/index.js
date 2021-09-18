import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  MemberLogin,
} from '../../custom';
// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <TopNav />
        <Header />
        <PageInfo title="Login" bgPicture="url(img/bg-info/login.png)" />
        <MemberLogin />
        <NewsLetter />
        <Footer />
      </>
    );
  }
}

export default Login;
