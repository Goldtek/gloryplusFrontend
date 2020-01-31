import React, { Fragment, useState, useEffect } from "react";
import Helmet from "react-helmet";
// import { Link } from "react-router-dom";
import Pagination from "./pagination";
import axios from "axios";
import {
  TopNav,
  Header,
  PageInfo,
  Footer,
  NewsLetter,
  EventItem
} from "../../custom";

const Events = () => {
  // state = {
  //   eventItems: []
  // };
  const [eventItems, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [eventPerPage] = useState(4);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get("./utils/eventData.json");
      setEvents(res.data);
      setLoading(false);
    };

    fetchItems();
  }, []);
  // componentWillMount() {
  //   axios
  //     .get("./db/eventData.json")
  //     .then(({ data: eventItems }) => {
  //       this.setState({ eventItems });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // const { eventItems } = this.state;

  //GET CURRENT POST
  const indexOfLastEvent = currPage * eventPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventPerPage;
  const currEvents = eventItems.slice(indexOfFirstEvent, indexOfLastEvent);
  //GET CURRENT POST

  //CHANGE PAGE
  const paginate = pageNumber => setCurrPage(pageNumber);

  //CHANGE PAGE

  return (
    <Fragment>
      <Helmet>
        <title>Events</title>
        <meta name="description" content="Home " />
      </Helmet>
      <TopNav />
      <Header />
      <PageInfo title="Events" bgPicture="url(img/bg-info/church-events.png)" />

      <section className="event-list-section spad">
        <div className="container">
          <div className="section-title title-left">
            <span>Experience God's Presence</span>
            <h2>Upcoming Events</h2>
          </div>
          <div className="event-list">
            <EventItem events={currEvents} loading={loading} />
          </div>
          {/* pagination */}
          <Pagination
            eventPerPage={eventPerPage}
            totalEvents={eventItems.length}
            paginate={paginate}
          />
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </Fragment>
  );
};
export default Events;
