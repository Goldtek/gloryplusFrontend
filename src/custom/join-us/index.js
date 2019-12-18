import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Player } from "video-react";

class JoinUs extends Component {
  render() {
    return (
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-content">
              <h2>The Pastors' Desk</h2>
              <p>
                The Scripture made us to understand that we are living in the
                last days,
                <br /> in these last days, God expects us to work in his glory.
              </p>
              <p>
                When we talk about the glory of God, we are talking about his
                charcter,
                <br /> the substance that makes God whom he is, his manifest
                prescence, his power and his reputation.
                <br /> In GloryPlus International we teach you to work in the
                glory of God, to enable you live the life you were designed to
                live.
              </p>
              <Link to="/" className="site-btn sb-wide">
                join us
              </Link>
            </div>
            <div className="col-md-6 join-img col-sm-12">
              {/* <img src="img/about.jpeg" alt="" /> */}
              {/* <Player>
                <source src="https://files.fm/pa/dike4mii4real/home.mp4/home.mp4" />
              </Player> */}

              <iframe
                src="https://drive.google.com/file/d/1lAauoQcnUA-1kWdrzdcqPgVFxgrFUVws/preview"
                width="100%"
                height="320"
                frameBorder="0"
                allow="fullscreen"
                allowFullScreen
                x-frame-options="sameorigin"
                title="join us"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JoinUs;
