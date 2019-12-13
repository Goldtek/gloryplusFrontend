import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./audioplayer.css";

const SectionCard = ({ sermonImg, artist, time, title, src }) => {
  // const [play, setPlay] = useState(false);

  // const playToggle = () => {
  //   setPlay(!play);
  //   console.log("play");
  // };
  // const pauseToggle = () => {
  //   setPlay(play);
  //   console.log("pause");
  // };

  return (
    <div>
      <div className="col-sm-6 col-md-4">
        <div className="sermon-item event-div ">
          {/* <b className={"fa-fa-play video-thumbnail"}></b> */}

          <div
            className="si-thumb set-bg"
            style={{
              backgroundImage: `url(${sermonImg})`
            }}
          ></div>
          <div className="si-content">
            <h4>{title}</h4>

            <ul className="sermon-info">
              <li>
                Sermon By: <span>{artist}</span>
              </li>

              {/* <li>
                <span>On {time}</span>
              </li> */}
              <AudioPlayer
                src={src}
                // onPlay={playToggle}
                // onPause={pauseToggle}

                // other props here
              />
            </ul>
            {/* <div className="icon-links">
              <a href="">
                <i className="ti-link"></i>
              </a>
              <a href="">
                <i className="ti-zip"></i>
              </a>
              <a href="">
                <i className="ti-headphone"></i>
              </a>
              <a href="">
                <i className="ti-import"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
