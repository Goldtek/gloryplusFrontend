import React, { Fragment } from 'react';

const Footer = () => (
  <>
    {/* FOOTER SECTION */}

    <footer className="footer-section ">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 copyright">
              Copyright &copy;
            {new Date().getFullYear()}
            {' '}
All rights reserved | GloryPlus
              International Assembly
          </div>
          <div className="col-sm-6">
            <div className="social">
              <a
                href="https://www.facebook.com/gloryplusintl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti-facebook" />
              </a>
              <a
                href="https://twitter.com/GloryplusI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti-twitter-alt" />
              </a>
              <a
                href="https://www.instagram.com/gloryplusintl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* FOOTER SECTION */}
  </>
);

export default Footer;

