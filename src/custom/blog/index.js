import React, { Component } from "react";

class Blog extends Component {
  render(h) {
    return (
      <section className="blog-section spad">
        <div className="container">
          <div className="section-title">
            <span>Experience God's Presence</span>
            <h2>LATEST NEWS</h2>
          </div>
          <div className="row">
           <div className="col-sm-6 col-md-4">
              <div className="blog-item">
                <div
                  className="bi-thumb set-bg"
                  style={{
                    backgroundImage: "url(img/blog/2.jpg)"
                  }}
                ></div>
                <div className="bi-content">
                  <div className="date">On Monday 13 May, 2018</div>
                  <h4>
                    <a href="single-blog.html">
                      Meet Our 2018 Patient Ambassadors
                    </a>
                  </h4>
                  <div className="bi-author">
                    by <a href="/">Sofia Joelsson</a>
                  </div>
                  <a href="/" className="bi-cata">
                    color Story
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="blog-item">
                <div
                  className="bi-thumb set-bg"
                  style={{
                    backgroundImage: "url(img/blog/3.jpg)"
                  }}
                ></div>
                <div className="bi-content">
                  <div className="date">On Monday 13 May, 2018</div>
                  <h4>
                    <a href="single-blog.html">
                      Why We Give Back To Children's Colorado
                    </a>
                  </h4>
                  <div className="bi-author">
                    by <a href="/">Sofia Joelsson</a>
                  </div>
                  <a href="/" className="bi-cata">
                    Sermon & Pray
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
