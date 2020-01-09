import React, { Component } from "react";

class ServiceSection extends Component {
  render() {
    return (
      <section
        className="services-section spad"
        data-aos={this.props.fade}
        data-aos-easing={this.props.ease}
        data-aos-duration={this.props.duration}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4 ">
              <div className="service-box ">
                <h4>
                  <i className="fa fa-fire"></i>Our Values
                </h4>
                <p>
                  Passion for the glory of God, passion for soul wining and
                  righteous living.
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
                  Raising a generation whose faith is in the power of God and
                  not in the wisdom of men. <br /> 1 corinthians 2:4
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
                  Revealing the knowledge of the glory of God to nations that he
                  might recieve glory from people through worship, this can be
                  accoplished through teaching, preaching, discipleship,
                  planting of churches and demonstrating the power of the holy
                  spirit.
                  {/* truncate it and on */}
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
