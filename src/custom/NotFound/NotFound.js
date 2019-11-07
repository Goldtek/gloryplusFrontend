import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <div id="wrapper" className="clearfix">
      <div className="main-content">
        <section id="home" className="divider fullscreen bg-lightest">
          <div className="display-table text-center">
            <div className="display-table-cell">
              <div className="container pt-0 pb-0">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <h1 className="font-150 text-theme-colored mt-0 mb-0">
                      <i className="fa fa-map-signs text-gray-silver"></i>404!
                    </h1>
                    <h2 className="mt-0">Oops! Page Not Found</h2>
                    <p>The page you were looking for could not be found.</p>
                    <a
                      className="btn btn-border btn-gray btn-transparent btn-circled smooth-scroll-to-target"
                      href="#contact"
                    >
                      Return Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
