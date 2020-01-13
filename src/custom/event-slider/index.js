import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";
import ImgDiv from "./imgdiv";
import "./slider.css";
const noOfItems = 12;
const noOfCards = 3;
const autoPlayDelay = 5000;
const chevronWidth = 40;

class EventSlider extends Component {
  state = {
    activeItemIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1)
    }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <section
        className="about-section"
        style={{ marginBottom: "25px" }}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            <div className="about-content">
              <h2>Latest Events</h2>
              <ItemsCarousel
                gutter={12}
                numberOfCards={noOfCards}
                activeItemIndex={this.state.activeItemIndex}
                requestToChangeActive={this.onChange}
                leftChevron={
                  <i
                    className="fa fa-chevron-circle-left icon-slide"
                    aria-hidden="true"
                  ></i>
                }
                rightChevron={
                  <i
                    className="fa fa-chevron-circle-right icon-slide"
                    aria-hidden="true"
                  ></i>
                }
                chevronWidth={chevronWidth}
                outsideChevron={false}
              >
                <ImgDiv
                  img="img/event-slider/mainfestation.jpeg"
                  caption="2020: Our Year of Uncommon Manifestation"
                />
                <ImgDiv
                  img="img/event-slider/fasting.jpg"
                  caption="GPI 2020 Fasting and Praying"
                />
                <ImgDiv
                  img="img/holygost.jpg"
                  caption="First Holy Ghost Morning For Year 2020"
                />
                {/* <ImgDiv img="img/mainChurch.jpg" /> */}
              </ItemsCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventSlider;
