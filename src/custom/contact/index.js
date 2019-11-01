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
                <h3>Lagos, Nigeria</h3>
                <p>18 kudirat Abiola way, Oregun, ikeja, Lagos, 100001 Lagos, Nigeria</p>
                <p>
                  <span>Email:</span> info@gloryplusinternational.com
                </p>
                <h4>Phone:</h4>
                <h5>+234 (812) 911–9588</h5>
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
