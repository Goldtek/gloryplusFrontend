import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Img1 from 'img/gpa.jpg';
// import Img2 from 'img/mainChurch.jpg'
// import Img3 from 'img/rev&mumSmile.jpg'
// import Img4 from 'img/rev&mumDance.jpg'
// 

const imgUrls = [
  'img/gpa.jpg',
  'img/mainChurch.jpg',
  'img/rev&mumSmile.jpg',
  'img/rev&mumDance.jpg'
];
const texts = [
  'WELCOME TO GLORYPLUS',
  'A GLORIOUS PEOPLE WITH A GLORIOUS MANDATE',
  `LIVING IN GOD'S GLORY`,
  'HIS GLORY IS MADE MANIFEST IN HIS PEOPLE'
];
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      image: ''
    }
  }

  componentDidMount = () => {
    this.displayImages(0);
    this.displayWords(0);
  }

  displayImages = (index) => {
		setTimeout(() => {
			this.setState({image: imgUrls[index]});

			if (index < imgUrls.length - 1) {
				index += 1;
			} else {
				index = 0;
			}

			this.displayImages(index);
		}, 7000)
  }
  
  displayWords = (index) => {
		setTimeout(() => {
			this.setState({text: texts[index]});

			if (index < texts.length - 1) {
				index += 1;
			} else {
				index = 0;
			}

			this.displayWords(index);
		}, 7000)
  }
  
  render() {
    return (
      <section
        className="hero-section set-bg"
        style={{
          backgroundImage: `url(${this.state.image})`
        }}
      >
        <div className="hero-content">
          <div className="hc-inner">
            <div className="container">
              <h2 style={{
                fontSize: '65px', 
                fontFamily: `'Inconsolata', 'monospace'`,
                // whiteSpace: 'nowrap',
                lineHeight: '78px'
              }}
                 className='hero-text'>{this.state.text}</h2>
              <p>A Glorious people, with a Glorious mandate</p>
              <Link to="/login" className="site-btn sb-wide sb-line">
                join us today
              </Link>
              &nbsp;
              <Link to="/live" className="site-btn sb-wide sb-line">
                Live Stream
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
