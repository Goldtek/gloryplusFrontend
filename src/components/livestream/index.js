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
  LiveStream
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
  componentWillMount() {
    
    // this.setState({ loading: true }, () => {
    //   axios.get("./utils/liveStreamData.json").then(result =>
    //     this.setState({
    //       loading: false,
    //       liveStream: [...result.data]
    //     })
    //   );
    // });
    this.fetchLiveStream();
  }

  fetchLiveStream = async () => {
    this.setState({ loading: true });
     const liveStreamDocs = await firestore.collection('livestream').doc("Rdk9PSngEiM0x1gFbtOn").get();
    // return console.log('liveStreamDocs.data()', liveStreamDocs.data());
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
          <title>GloryPlus International - LiveStream - watch our services live</title>
          <meta name="description" content="Live Stream" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Live Stream" bgPicture="url(img/bg-info/live-streaming.jpg)" />
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
          <LiveStream liveStream={liveStream} live={false}/>
        )}

        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default LiveStreaming;
