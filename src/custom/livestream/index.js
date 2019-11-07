import React, { Component } from "react";

class LiveStream extends Component {
  render() {
    let url =
      "https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Fgloryplusintl%2Fvideos%2F395479274660982%2F&show_text=0&width=560";
    return (
      <div className="container">
        <div className="col-md-2 col-lg-2 col-sm-2"></div>
        <div className="col-md-8 col-lg-8 col-sm-8 detail-div box effect2">
          <div class="embed-responsive embed-responsive-4by3">
            {/* <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowfullscreen
              title="title"
            ></iframe> */}

            <iframe
              src={url}
              width="560"
              height="350"
              className="embed-responsive-item"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
              title="title"
            ></iframe>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 col-sm-2"></div>
      </div>
    );
  }
}

export default LiveStream;
