import React, { Component } from "react";

class NewsLetter extends Component {
  render() {
    return (
      <section className="newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <h4>Subscribe And Tell Us Real Story About Your Journey</h4>
            </div>
            <div className="col-sm-8 col-md-5 col-sm-offset-2 col-md-offset-0">
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="nl-send-btn">subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsLetter;
