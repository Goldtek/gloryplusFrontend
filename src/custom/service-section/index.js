import React, { Component } from "react";

class ServiceSection extends Component {
  render() {
    return (
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="service-box">
                <h4>
                  <i className="fa fa-fire"></i>Our Values
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non, <br /> sunt in culpa
                  qui officia dese mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste.
                </p>
                <a href="/" className="s-readmore">
                  Readmore <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-box">
                <h4>
                  <i className="fa fa-eye"></i>Our Vision
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non, <br /> sunt in culpa
                  qui officia dese mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste.
                </p>
                <a href="/" className="s-readmore">
                  Readmore <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service-box">
                <h4>
                  <i className="fa fa-heart"></i>Our Mission
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non, <br /> sunt in culpa
                  qui officia dese mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste.
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
