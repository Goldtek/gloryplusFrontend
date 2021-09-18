/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import {
  Header,
  TopNav,
  Footer,
  UnleashRegister,
  NewsLetter,
  PageInfo,
} from '../../custom';

const Unleash = () => (
  <>
    <TopNav />
    <Header />
    <PageInfo title="UnLeash Registration" bgPicture="url(img/bg-info/login.png)" />
    <UnleashRegister />
    <NewsLetter />
    <Footer />
  </>
);

export default Unleash;
