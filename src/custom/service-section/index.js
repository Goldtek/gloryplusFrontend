import React, { Component } from "react";

class ServiceSection extends Component {
  render() {
    return (
      <section className="services-section spad ">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 ">
              <div className="service-box ">
                <h4>
                  <i className="fa fa-fire"></i>Our Values
                </h4>
                <p>
                  To raise leaders who will serve as model to nations,
                  Showcasing the glory of God in everything area of our lives.
                </p>
                <a href="/" className="s-readmore">
                  Readmore <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="service-box">
                <h4>
                  <i className="fa fa-eye"></i>Our Vision
                </h4>
                <p>
                  Establish churches for spiritual growth, <br /> plant schools
                  for intellectual development. Raising of leaders.
                </p>
                <a href="/" className="s-readmore">
                  Readmore <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="service-box">
                <h4>
                  <i className="fa fa-heart"></i>Our Mission
                </h4>
                <p>
                  Demonstrate the love of God, <br /> To spread the knowledge of
                  the Glory to the ends of the earth
                </p>
                <a href="/" className="s-readmore">
                  Readmore <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceSection;
