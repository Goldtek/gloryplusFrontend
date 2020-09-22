import React, { Component, Fragment } from "react";
// const BrowserHistory = require('react-router/lib/BrowserHistory').default;
import axios from "axios";
import { Helmet } from "react-helmet";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import About from "../about";
// import SermonComponent from "../sermon";
// import ContactUs from "../contact";
// import Group from "../group";
// import Events from "../event";
// import DonateComponent from "../donate";
// import DonationComponent from "../donation";
// import Login from "../login";
// import Register from "../register";
// import LiveStreaming from "../livestream";
// import Event_Details from "../event-detail";
// import Galleries from "../galleries/index";
// import Gallery from "../gallery";
// import TestifyComponent from "../testify";
// import PrayerRequestComponent from "../prayer-request";
// import Courses from '../courses';
// import Schedule from '../schedule';
// import Lessons from '../list-courses';
// import Video from '../class_video';
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  Hero,
  Header,
  TopNav,
  EventTimer,
  JoinUs,
  ServiceSection,
  Donate,
  NewsLetter,
  Footer,
  // ErrorPage,
  Testimonial,
  EventSlider,
} from "../../custom";
/*----------------
MEMBERS IMPORT
----------------- */
import Member from "../member";
// declare constant for event api
const eventAPI = "./utils/eventData.json";
const TestimonialAPI = "./utils/testimonyData.json";

/*----------------
MEMBERS IMPORT
----------------- */
class Home extends Component {
  // SET STATE FOR EVENT
  state = {
    eventItemSlide: [],
    testimonyItem: [],
    loading: false,
    bibleVerse: [],
    error: null,
  };
  //EVENT NEWS SLIDER
  componentDidMount() {
    //fetch event item and store it in the state
    this.setState({ loading: true }, () => {
      axios.get(eventAPI).then((result) =>
        this.setState({
          loading: false,
          eventItemSlide: [...result.data],
        })
      );
    });

    this.setState({ loading: true }, () => {
      axios.get(TestimonialAPI).then((testimony) =>
        this.setState({
          loading: false,
          testimonyItem: [...testimony.data],
        })
      );
    });

   }

  //EVENT NEWS SLIDER
  render() {
    const { eventItemSlide, loading, testimonyItem } = this.state;
    return (
      <>
      <Helmet>
        <title>Glory Plus</title>
        <meta name="description" content="Home " />
      </Helmet>
      <TopNav />
      <Header />
      <Hero />
      <EventTimer />
      <JoinUs fade="zoom-in" duration="1300" ease="ease-in-sine" />
      <EventSlider newslides={eventItemSlide} loading={loading} />
      <ServiceSection />
      <Testimonial tesmonies={testimonyItem} />
      <Donate />
      <NewsLetter />
      <Footer />
    </>
    );
  }
}

export default Home;
