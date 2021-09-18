import React, { Component, Fragment } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import { firestore } from "../../custom/firebase";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  UnleashStream,
} from "../../custom";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class LiveStreaming extends Component {
  state = {
    liveStream: [],
    loading: false
  };
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    this.fetchLiveStream();
  }

  fetchLiveStream = async () => {
    this.setState({ loading: true });
     const liveStreamDocs = await firestore.collection('unleash-stream').doc("LZn2Pjzk4W4Re5gCPb16").get();
          this.setState({
            loading: false,
            liveStream: liveStreamDocs.data()
          });
  }

  render() {
    const { loading, liveStream } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>GloryPlus International - Unleash LiveStream</title>
          <meta name="description" content="Live Stream" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Unleash Live Stream" bgPicture="url(img/bg-info/live-streaming.jpg)" />
        {loading ? (
          <div style={{ minHeight: "35vh" }}>
            <div className="col-md-4"></div>
            <div
              className="col-md-4"
              style={{
                marginTop: "35px",
                marginBottom: "20px"
              }}
            >
              {" "}
              <FadeLoader
                css={override}
                sizeUnit={"px"}
                size={50}
                color={"#b42b2b"}
                height={25}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        ) : (
          <UnleashStream liveStream={liveStream} live={false}/>
        )}

        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default LiveStreaming;
