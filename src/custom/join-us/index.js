import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Player } from "video-react";
// import "./player.css";

class JoinUs extends Component {
  render() {
    return (
      <section
        className="about-section spad"
        data-aos={this.props.fade}
        // data-aos-offset="300"
        data-aos-easing={this.props.ease}
        data-aos-duration={this.props.duration}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-content">
              <h2>The Pastors' Desk</h2>
              <p>
                The Scripture made us understand that we are living in the last
                days, in these last days, God expects us to work in his glory.
                When we talk about the glory of God, we are talking about his
                character, the substance that makes God who he is, his manifest
                presence, his power, and his reputation. In GloryPlus
                International we teach you to work in the glory of God, to
                enable you to live the life you were designed to live.
              </p>
              <Link to="/register" className="site-btn sb-wide">
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
              {/* 
              <Player
                playsInline
                poster="img/about.jpeg"
                src="https://drive.google.com/file/d/1lAauoQcnUA-1kWdrzdcqPgVFxgrFUVws/preview/home.mp4"
              /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JoinUs;
