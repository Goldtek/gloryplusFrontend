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
            <div className="col-sm-6 col-md-6">
              <div className="pastor">
                <div
                  className="pastor-img set-bg"
                  style={{
                    backgroundImage: "url(img/about.jpeg)"
                  }}
                ></div>
                <h3>Rev. Dubus Achufusi</h3>
                <p>Lead Pastor</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="pastor">
                <div
                  className="pastor-img set-bg"
                  style={{
                    backgroundImage: "url(img/pastors/roseline.jpg)"
                  }}
                ></div>
                <h3>Pastor Roseline Achufusi</h3>
                <p>Assistant Pastor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
