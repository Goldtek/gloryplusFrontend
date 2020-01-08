import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { css } from "@emotion/core";
import { DotLoader } from "react-spinners";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  GroupList
} from "../../custom";
import "./group.css";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class HomeChurch extends Component {
  state = {
    groupInfo: [], // will hold the results from our ajax call
    loading: false // will be true when ajax request is running
  };

  componentDidMount() {
    // axios
    //   .get("./db/groupData.json")
    //   .then(({ data: groupInfo }) => {
    //     this.setState({ groupInfo, loading: true });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // this.setState({ loading: true }, () => {
    //   axios.get("./db/groupData.json").then(result =>
    //     this.setState({
    //       loading: false,
    //       groupInfo: [...result]
    //     })
    //   );
    // });

    this.setState({ loading: true }, () => {
      axios.get("./utils/groupData.json").then(result =>
        this.setState({
          loading: false,
          groupInfo: [...result.data]
        })
      );
    });
  }
  render() {
    const { groupInfo, loading } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Group</title>
          <meta name="description" content="home church" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Home Church" bgPicture="url(img/homecell.jpg)" />
        {loading ? (
          <div style={{ minHeight: "25vh" }}>
            <div className="col-md-4"></div>
            <div
              className="col-md-4"
              style={{
                marginTop: "35px",
                marginBottom: "20px"
              }}
            >
              {" "}
              <DotLoader
                css={override}
                sizeUnit={"px"}
                size={50}
                color={"#b42b2b"}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        ) : (
          <GroupList homechurchInfo={groupInfo} />
        )}

        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default HomeChurch;
