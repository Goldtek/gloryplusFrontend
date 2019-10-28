import React, { Component } from "react";

class JoinUs extends Component {
  render() {
    return (
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-content">
              <h2>Let's Make the World Better Together</h2>
              <p>
                For God did not send his Son into the world to condemn the
                world,
                <br /> but to save the world through him.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui
                <br /> officia dese mollit anim id est laborum. Sed ut
                perspiciatis
                <br /> unde omnis iste.
              </p>
              <a href="/" className="site-btn sb-wide">
                join with us
              </a>
            </div>
            <div className="col-md-6 about-img">
              <img src="img/about.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JoinUs;
