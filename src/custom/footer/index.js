import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      {/* TOP FOOTER */}
      <section className="footer-top-section spad">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 footer-top-content">
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
          </div>
        </div>
        <div className="map-area" id="map-canvas"></div>
      </section>
      {/* TOP FOOTER */}

      {/* FOOTER SECTION */}

      <footer className="footer-section ">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 copyright">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>
            </div>
            <div className="col-sm-6">
              <div className="social">
                <a href="/">
                  <i className="ti-facebook"></i>
                </a>
                <a href="/">
                  <i className="ti-twitter-alt"></i>
                </a>
                <a href="/">
                  <i className="ti-google"></i>
                </a>
                <a href="/">
                  <i className="ti-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION */}
    </Fragment>
  );
};

export default Footer;
