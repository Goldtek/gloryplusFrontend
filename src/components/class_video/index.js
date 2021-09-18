/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import StarRatingComponent from 'react-star-rating-component-unsafe';
import axios from 'axios';
import {
  Header, Assignment,
} from '../../custom';


import './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends Component {
  state = {
    duration: 0,
    minSeconds: 12, // 2 minutes
    maxSeconds: 72, // 12 minutes 
    rating: 0,
    isRating: false,
    rated: false,
    showAssignemnt: false,
    questions: [],
  };


  componentDidMount() {
    this.fetchClass();
  }

  fetchClass = async () => {
    const res = await axios.get("./utils/classData.json");
    this.setState({ questions: res.data });
  }

  randomNumber = (min, max) => {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  } 

  setDuration = (duration) => {
    this.setState({ duration: Math.ceil(duration) });
  }

  setCurrentTime = (currentTime) => {
    const { duration, minSeconds, maxSeconds, rated } = this.state;
    const min = duration - maxSeconds;
    const max = duration - minSeconds;
    const popupTime = this.randomNumber(min,max);
    const cTime = Math.ceil(currentTime);
    const popOff = 6;
  
    if (cTime === popupTime && rated === false) {
      this.setState({ popOff: cTime + popOff, isRating: true })
    }
    if(this.state.popOff !== undefined && cTime === this.state.popOff) {
        this.setState({ isRating: false, rated: true });
    }
  }

  loadAssigment = () => {
    this.setState({ showAssignemnt: true });
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue, isRating: false, rated: true });
    // send response to api
  }

  render() {
    const { questions, currentIndex } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Helmet>
          <title>GloryPlus International academy - Courses</title>
        </Helmet>
        <Header /> 
        {(!this.state.showAssignemnt) ? ( 
          <Fragment>
              <div align="center" className="embed-responsive embed-responsive-16by9" style={{zIndex: 0, position: 'relative' }}>
                <video
                  className="embed-responsive-item"
                  controls
                  controlsList="nodownload"
                  onPlay={(e) => e.currentTarget.webkitDisplayingFullscreen}
                  onTimeUpdate={(e) => this.setCurrentTime(e.target.currentTime)}
                  onEnded={(e)=> this.loadAssigment()}
                  onLoadedMetadata={(e) => {
                      this.setDuration(e.target.duration)
                  }}
                >
                  <source src="../sermon/cross.mp4" type="video/mp4" />
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
          </Fragment>
        ): ( 
            <Assignment 
              questions={questions} 
              lesson
               /> 
        )}    
      </>
    );
  }
}

export default Video;
