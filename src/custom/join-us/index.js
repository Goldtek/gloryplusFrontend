import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Player } from "video-react";
// import { Player } from "video-react";
import "./player.css";

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
              {/* <Player
                playsInline
                poster="img/pastors/rev.jpeg"
                src="https://res.cloudinary.com/ielemson/video/upload/v1580163853/glory-plus/home.mp4_2_ros4xe.mp4"
              /> */}

              <div className="embed-responsive embed-responsive-16by9 card">
                <video
                  controls
                  poster="img/pastors/rev-dubus1.jpeg"
                  className="embed-responsive-item "
                >
                  <source src="video/home.mp4" type="video/mp4" />
                  {/* <source
                    src="https://res.cloudinary.com/ielemson/video/upload/v1580163853/glory-plus/home.mp4_2_ros4xe.mp4"
                    type="video/mp4"
                  /> */}
                  <source src="video/home.mp4" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
                {/* <iframe allowfullscreen></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JoinUs;
