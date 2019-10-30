import React, { Component } from "react";
class Hero extends Component {
  render() {
    return (
      <section
        className="hero-section set-bg"
        style={{
          backgroundImage:
            "url(img/bg.png)"
        }}
      >
        <div className="hero-content">
          <div className="hc-inner">
            <div className="container">
              <h2>Living in God’s Amazing Grace!</h2>
              <p>
              A Glorious people, with a Glorious mandate
              </p>
              <a href="/" className="site-btn sb-wide sb-line">
                join with us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
