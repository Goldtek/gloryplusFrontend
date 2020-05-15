/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Header,
  TopNav,
  Footer,

} from '../../custom';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends Component {
  state = {
    duration: 0,
    minSeconds: 12, // 120
    maxSeconds: 72, // 720
  };

  randomNumber = (min, max) => {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  } 

  setDuration = (duration) => {
    this.setState({ duration: Math.ceil(duration) });
  }

  setCurrentTime = (currentTime) => {
    const { duration, minSeconds, maxSeconds } = this.state;
    const min = duration - maxSeconds;
    const max = duration - minSeconds;
    const popupTime = this.randomNumber(min,max);
    const cTime = Math.ceil(currentTime);
  
  
    if (cTime === popupTime){
      alert(cTime);
      // const popOff = cTime + 60;
    }

   // after pop off
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Helmet>
          <title>Courses</title>
          <meta name="description" content="Class" />
        </Helmet>
        <Header />
        <div align="center" className="embed-responsive embed-responsive-16by9" style={{zIndex: 0, position: 'relative' }}>
          <video
            className="embed-responsive-item"
            controls
            controlsList="nodownload"
            onTimeUpdate={(e) => this.setCurrentTime(e.target.currentTime)}
            onLoadedMetadata={(e) => {
                 this.setDuration(e.target.duration)
            }}
          >
            <source src="https://res.cloudinary.com/dvxptc5uy/video/upload/v1584526743/sermons/selfdenial_kz5cu7.mp4" type="video/mp4" />
          </video>
        </div>
        <div style={{position: 'absolute', bottom: '4%', right: '10%', zIndex: 2, color: 'black' }}> Rating </div>
      </>
    );
  }
}

export default Video;
