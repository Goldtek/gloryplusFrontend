import React, { Component } from "react";
import SectionCard from "../sermon-card";
class SermonList extends Component {
  render() {
    return (
      <section className="sermons-list-section spad">
        <div className="container">
          <div className="section-title">
            <span>Experience God's Presence</span>
            <h2>Popular Sermons</h2>
          </div>
          <div className="row">
            <SectionCard />
            <SectionCard />
            <SectionCard />
          </div>

          <div className="pagination-area">
            <ul className="pageination-list">
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">
                  Next <i className="fa fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
            <p>Page 1 of 08 results</p>
          </div>
        </div>
      </section>
    );
  }
}

export default SermonList;
