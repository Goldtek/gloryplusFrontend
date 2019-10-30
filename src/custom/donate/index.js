import React, { Component } from "react";

class Donate extends Component {
  render() {
    return (
      <section
        className="donate-section spad set-bg"
        style={{
          backgroundImage: "url(img/partner/partner.jpeg)"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 donate-content">
              <h2>GloryPlus Partners</h2>
              <p>
                Thus saith the LORD of hosts; <br />
                My cities through prosperity shall yet be spread abroad;
                <br /> and the LORD shall yet comfort Zion,
                <br /> and shall yet choose Jerusalem.
                <br /> become a partner of gloryplus international <br /> and
                spread the gospel to the ends of the earth. <br />
                <strong>Zechariah 1 v 17</strong>
              </p>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="donate-card">
                <a href="/" className="site-btn sb-full">
                  <b className="fa fa-hand-o"></b> PARTNER WITH US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Donate;
