/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import StarRatingComponent from 'react-star-rating-component-unsafe';
import {
  Header,
  TopNav,
  Footer,

} from '../../custom';

import './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends Component {
  state = {
    duration: 0,
    minSeconds: 120, // 2 minutes
    maxSeconds: 720, // 12 minutes 
    rating: 0,
    isRating: false,
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
    const popOff = 60;
  
    if (cTime === popupTime) {
      this.setState({ popOff: cTime + popOff, isRating: true })
    }
    if(this.state.popOff !== undefined && cTime === this.state.popOff) {
        this.setState({ isRating: false });
    }
  }

  loadAssigment = () => {

  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue, isRating: false});
    // send response to api
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
            onPlay={(e) => e.currentTarget.webkitDisplayingFullscreen}
            onTimeUpdate={(e) => this.setCurrentTime(e.target.currentTime)}
            onEnded={()=> this.loadAssigment()}
            onLoadedMetadata={(e) => {
                 this.setDuration(e.target.duration)
            }}
          >
            <source src="https://res.cloudinary.com/dvxptc5uy/video/upload/v1584526743/sermons/selfdenial_kz5cu7.mp4" type="video/mp4" />
          </video>
        </div>
        {(this.state.isRating) && (
        <div className="rating">
          Please Rate this Class
         <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
          onStarClick={() => this.onStarClick()}
          starColor={"gold"}
          emptyStarColor={"white"} 
        />
         </div>
        )}
      </>
    );
  }
}

export default Video;
