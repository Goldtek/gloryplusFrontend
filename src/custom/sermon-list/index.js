import React, { useEffect, useState } from "react";
import SectionCard from "../sermon-card";
import Pagination from "../pagination";

// import UpcomingEvent from "../up-coming-events";
// import InfiniteScroll from "react-infinite-scroll-component";
const SermonList = ({ sermons }) => {
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [sermonPerPage] = useState(6);
  const paginate = pageNumber => setCurrPage(pageNumber);

  // get current paginated content for that page
  const indexOfLastEvent = currPage * sermonPerPage;
  const indexOfFirstEvent = indexOfLastEvent - sermonPerPage;
  const currSermons = sermons.slice(indexOfFirstEvent, indexOfLastEvent);
  
  return (
    <section className="sermons-list-section spad">
      <div className="container">
        <div className="section-title">
          <span>Experience God's Presence</span>
          <h2>Popular Sermons</h2>
          
        </div>
        <div className="row">
          {currSermons.map(({ Id, ...sermonProps }) => (
            <SectionCard key={Id} {...sermonProps} />
          ))}
        </div>

        <Pagination
            PerPage={sermonPerPage}
            total={sermons.length}
            paginate={paginate}
          />
      </div>
    </section>
  );
};

export default SermonList;
