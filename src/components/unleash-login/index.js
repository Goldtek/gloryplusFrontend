import React from 'react';
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  UnleashLogin,
} from '../../custom';
// eslint-disable-next-line react/prefer-stateless-function
const Login = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <TopNav />
    <Header />
    <PageInfo title="Unleash Login" bgPicture="url(img/bg-info/login.png)" />
    <UnleashLogin />
    <NewsLetter />
    <Footer />
  </>
);


export default Login;
