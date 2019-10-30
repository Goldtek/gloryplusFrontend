import React, { Component } from "react";

class Contactus extends Component {
  render() {
    return (
      <div>
        <div className="full-map" id="map-canvas"></div>

        <section className="footer-top-contact-section spad">
          <div className="container">
            <div className="row">
              <div className="col-md-6 footer-top-content">
                <div className="section-title title-left">
                  <h2>Contact Us</h2>
                </div>
                <h3>New York, USA</h3>
                <p>207 Park Avenue New York, NY 90210</p>
                <p>
                  <span>Email:</span> info@colorlib.com
                </p>
                <h4>Phone:</h4>
                <h5>+1 (409) 987–4567</h5>
              </div>
              <div className="col-md-6">
                <div className="section-title title-left">
                  <h2>CONTACT FORM</h2>
                </div>
                <form className="contact-form">
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" placeholder="Email address" />
                    </div>
                    <div className="col-sm-12">
                      <textarea placeholder="Your Messege"></textarea>
                      <button type="submit" className="site-btn">
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contactus;
