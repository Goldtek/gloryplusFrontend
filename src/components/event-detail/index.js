import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  EventDetail,
  firestore,
} from "../../custom";

import { handleError } from '../../lib/util';

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
    this.fetchItems();
  }

  fetchItems = async () => {
    this.setState({ loading: true });
    await firestore.collection('events')
    .onSnapshot((querySnapshot) => {
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()});
      });
      console.log('event-details'. results);
      this.setState({
        loading: false,
        eventDetails: results
      });
    }, handleError);
  };
  render() {
    const pathID = this.props.match.params.eventID;
    const { eventDetails, loading } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>
            Event-{pathID.charAt(0).toUpperCase() + pathID.slice(1)}
          </title>
          <meta
            name="description"
            content={pathID.charAt(0).toUpperCase() + pathID.slice(1)}
          />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title={pathID.charAt(0).toUpperCase() + pathID.slice(1)}
          bgPicture="url(img/bg-info/church-events.png)"
        />

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
              .filter(filterEvent =>
                filterEvent.pathName
                  .toLowerCase()
                  .includes(pathID.toLowerCase())
              )
              .map(({ id, ...filteredEvent }) => (
                <EventDetail
                  key={id}
                  {...filteredEvent}
                  eventArr={eventDetails}
                />
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
