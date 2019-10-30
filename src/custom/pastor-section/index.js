import React, { Component } from "react";

export default class PastorSection extends Component {
  render() {
    return (
      <section className="pastors-section spad">
        <div className="container">
          <div className="section-title">
            <span>Experience God's Presence</span>
            <h2>Our Pastors</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="pastor">
                <div
                  className="pastor-img set-bg"
                  style={{
                    backgroundImage: "url(img/about.jpeg)"
                  }}
                ></div>
                <h3>Dubus Achufusi</h3>
                <p>Rev</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pastor">
                <div
                  className="pastor-img set-bg"
                  style={{
                    backgroundImage: "url(img/pastors/2.jpg)"
                  }}
                ></div>
                <h3>Billy Graham</h3>
                <p>Lead Pastor</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pastor">
                <div
                  className="pastor-img set-bg"
                  style={{
                    backgroundImage: "url(img/pastors/3.jpg)"
                  }}
                ></div>
                <h3>Lead Pastor</h3>
                <p>Pastor</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pastor">
                <div
                  className="pastor-img set-bg"
                  style={{
                    backgroundImage: "url(img/pastors/4.jpg)"
                  }}
                ></div>
                <h3>Pat Robertson</h3>
                <p>Protestant Clergy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
