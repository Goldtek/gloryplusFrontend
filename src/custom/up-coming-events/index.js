import React, { Component } from "react";

class UpcomingEvent extends Component {
  render() {
    return (
      <section className="event-list-section spad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-title title-left">
                <span>Experience God's Presence</span>
                <h2>Upcoming Events</h2>
              </div>
            </div>
            <div className="col-md-6 text-right event-more">
              <a href="/" className="site-btn">
                view all events
              </a>
            </div>
          </div>
          <div className="event-list">
            <div className="el-item">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="el-thubm set-bg"
                    data-setbg="img/event/1.jpg"
                  ></div>
                </div>
                <div className="col-md-8">
                  <div className="el-content">
                    <div className="el-header">
                      <div className="el-date">
                        <h2>20</h2>
                        may
                      </div>
                      <h3>Give To Help Each Child Grow Up Healthy</h3>
                      <div className="el-metas">
                        <div className="el-meta">
                          <i className="fa fa-user"></i> Vincent John
                        </div>
                        <div className="el-meta">
                          <i className="fa fa-calendar"></i> Monday, 08:00 Am{" "}
                        </div>
                        <div className="el-meta">
                          <i className="fa fa-map-marker"></i> Central District,
                          Riga, LV-1050, Latvia
                        </div>
                      </div>
                    </div>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <a href="/" className="site-btn sb-line">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="el-item">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="el-thubm set-bg"
                    data-setbg="img/event/2.jpg"
                  ></div>
                </div>
                <div className="col-md-8">
                  <div className="el-content">
                    <div className="el-header">
                      <div className="el-date">
                        <h2>16</h2>
                        oct
                      </div>
                      <h3>Your Support Helps Kids Survive & Thrive</h3>
                      <div className="el-metas">
                        <div className="el-meta">
                          <i className="fa fa-user"></i> Vincent John
                        </div>
                        <div className="el-meta">
                          <i className="fa fa-calendar"></i> Monday, 08:00 Am{" "}
                        </div>
                        <div className="el-meta">
                          <i className="fa fa-map-marker"></i> Central District,
                          Riga, LV-1050, Latvia
                        </div>
                      </div>
                    </div>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore
                    </p>
                    <a href="/" className="site-btn sb-line">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvent;
