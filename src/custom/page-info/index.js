import React, { Component } from "react";

export default class PageInfo extends Component {
  render() {
    return (
      <section className="page-info-section set-bg" data-setbg="img/bg.jpg">
        <div className="page-info-content">
          <div className="pi-inner">
            <div className="container">
              <h2>About Us</h2>
              <div className="site-breadcrumb">
                <a href="/">Home</a> <i className="fa fa-angle-right"></i>
                <span>About Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
