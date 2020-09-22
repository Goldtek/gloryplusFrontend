/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
// import axios from "axios";
import { css } from '@emotion/core';
import { DotLoader } from 'react-spinners';
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  GroupList,
} from '../../custom';
import './group.css';

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

const HomeChurchAPI = "./utils/groupData.json";


class HomeChurch extends Component {
  state = {
    groupInfo: [],
    loading: true,
  };

  componentDidMount() {
    console.log('check')
       //home church
        axios.get(HomeChurchAPI).then((result) =>
          this.setState({
            loading: false,
            groupInfo: [...result.data],
          })
        );
   
  }

  render() {
    const { groupInfo, loading } = this.state;
    console.log('state', this.state);
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Helmet>
          <title>Group</title>
          <meta name="description" content="home church" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title="Home Church"
          bgPicture="url(img/bg-info/homecell.jpg)"
        />
        {loading ? (
          <div style={{ minHeight: '25vh' }}>
            <div className="col-md-4" />
            <div
              className="col-md-4"
              style={{
                marginTop: '35px',
                marginBottom: '20px',
              }}
            >
              {' '}
              <DotLoader
                css={override}
                sizeUnit="px"
                size={50}
                color="#b42b2b"
              />
            </div>
            <div className="col-md-4" />
          </div>
        ) : (
          <GroupList homechurchInfo={groupInfo} />
        // console.log(homeChurchRouterProps)
        )}

        <NewsLetter />
        <Footer />
      </>
    );
  }
}

export default HomeChurch;
