import React from "react";
import SectionCard from "../sermon-card";
// import UpcomingEvent from "../up-coming-events";
// import InfiniteScroll from "react-infinite-scroll-component";
const SermonList = ({ sermon }) => {
  return (
    <section className="sermons-list-section spad ">
      <div className="container">
        <div className="section-title">
          <span>Experience God's Presence</span>
          <h2>Popular Sermons</h2>
        </div>
        <div className="row">
          {sermon.map(({ Id, ...sermonProps }) => (
            <SectionCard key={Id} {...sermonProps} />
          ))}
        </div>

        {/* <div className="pagination-area">
          <ul className="pageination-list">
            <li>
              <a href="!#">1</a>
            </li>

            <li>
              <a href="!#">
                Next <i className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
          <p>Page 1 of 1 results</p>
        </div> */}
      </div>
    </section>
  );
};

export default SermonList;
