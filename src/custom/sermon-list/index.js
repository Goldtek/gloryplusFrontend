import React, { Component } from "react";
import SectionCard from "../sermon-card";
class SermonList extends Component {
  render() {
    return (
      <section className="sermons-list-section spad ">
        <div className="container">
          <div className="section-title">
            <span>Experience God's Presence</span>
            <h2>Popular Sermons</h2>
          </div>
          <div className="row">
            <SectionCard
              title="The Blood of Jesus"
              preacher="Rev Dubus Achufusi"
              time="Sunday, 20 OCT, 2019"
              sermonImg="img/sermons/blood.jpg"
            />
            <SectionCard
              title="In his Presence"
              preacher="Rev Dubus Achufusi"
              time="Tuesday, 25 OCT, 2019"
              sermonImg="img/sermons/worship.jpg"
            />
            <SectionCard
              title="The Kingdom of God"
              preacher="Rev Dubus Achufusi"
              time="Monday, 25 OCT, 2019"
              sermonImg="img/about.jpeg"
            />
          </div>

          <div className="pagination-area">
            <ul className="pageination-list">
              <li>
                <a href="#">1</a>
              </li>

              <li>
                <a href="#">
                  Next <i className="fa fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
            <p>Page 1 of 1 results</p>
          </div>
        </div>
      </section>
    );
  }
}

export default SermonList;
