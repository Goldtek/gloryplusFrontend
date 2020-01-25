import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import ImgDiv from "./imgdiv";
import "./slider.css";
const noOfItems = 12;
const noOfCards = 3;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
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
    const { newslides, loading } = this.props;
    return (
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="about-content">
              <h2>Latest Events</h2>

              {loading ? (
                <div>
                  <div className="col-md-4"></div>
                  <div
                    className="col-md-4"
                    style={{
                      marginTop: "35px",
                      marginBottom: "20px"
                    }}
                  >
                    {" "}
                    <FadeLoader
                      css={override}
                      sizeUnit={"px"}
                      size={50}
                      color={"#b42b2b"}
                      height={25}
                    />
                  </div>
                  <div className="col-md-4"></div>
                </div>
              ) : (
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
                  {newslides.map(({ id, ...newslidesdata }) => (
                    <ImgDiv
                      key={id}
                      img={newslidesdata.imagePath}
                      caption={newslidesdata.title}
                      url={`/event/${newslidesdata.pathName}`}
                    />
                  ))}
                </ItemsCarousel>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventSlider;
