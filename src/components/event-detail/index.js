import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  EventDetail
} from "../../custom";
const API = "./db/eventData.json";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Event_Details extends Component {
  state = {
    eventDetails: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get(API).then(result =>
        this.setState({
          loading: false,
          eventDetails: [...result.data]
        })
      );
    });
  }
  render() {
    const pathID = this.props.match.params.eventID;
    const { eventDetails, loading } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Event-{pathID.charAt(0).toUpperCase() + pathID.slice(1)}</title>
          <meta name="description" content="Live Stream" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Live Stream" bgPicture="url(img/donate.jpg)" />

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
          <div style={{ minHeight: "25vh" }}>
            {eventDetails
              .filter(filtGallery =>
                filtGallery.pathName
                  .toLowerCase()
                  .includes(pathID.toLowerCase())
              )
              .map(({ id, ...filteredEvent }) => (
                <EventDetail key={id} {...filteredEvent} />
              ))}
          </div>
        )}
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default Event_Details;
