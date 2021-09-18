import React, { Fragment, useState, useEffect } from 'react';

import { handleError } from '../../lib/util';
import Pagination from '../../custom/pagination';
import {
  TopNav,
  Header,
  PageInfo,
  Footer,
  NewsLetter,
  EventItem,
  firestore,
} from '../../custom';

const Events = () => {
  // state = {
  //   eventItems: []
  // };
  const [eventItems, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [eventPerPage] = useState(4);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    await firestore.collection('events')
      .onSnapshot((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push({ uid: doc.id, ...doc.data() });
        });
        setEvents(results);
        setLoading(false);
      }, handleError);
  };

  // GET CURRENT POST
  const indexOfLastEvent = currPage * eventPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventPerPage;
  const currEvents = eventItems.slice(indexOfFirstEvent, indexOfLastEvent);
  // GET CURRENT POST

  // CHANGE PAGE
  const paginate = (pageNumber) => setCurrPage(pageNumber);
  // CHANGE PAGE

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
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
            PerPage={eventPerPage}
            total={eventItems.length}
            paginate={paginate}
          />
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </>
  );
};
export default Events;
