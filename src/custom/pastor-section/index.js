import React, { Component } from "react";

export default class PastorSection extends Component {
  render() {
    return (
      <section className="pastors-section spad">
        <div className="container">
          <div className="section-title">
            <span>Experience God's Glory</span>
            <h2>Meet Our Pastors</h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-lg-offset-2 pst-div">
              <div className="our-team">
                <img
                  src="img/pastors/rev-edit.jpeg"
                  alt="senior pastor"
                  className="img-responsive"
                />
                <div className="team-content">
                  <h3 className="name">Rev Dubus Achufusi</h3>
                  <span className="post">Senior Pastor</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 pst-div">
              <div className="our-team">
                <img
                  src="img/pastors/pst-roseline.jpeg"
                  alt="roseline achufusi"
                  className="img-responsive"
                />
                <div className="team-content">
                  <h3 className="name">Pastor Roseline Achufusi</h3>
                  <span className="post">Assistant Pastor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
