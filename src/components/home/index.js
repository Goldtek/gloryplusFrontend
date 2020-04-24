import React, { Component, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import About from "../about";
import SermonComponent from "../sermon";
import ContactUs from "../contact";
import Group from "../group";
import Events from "../event";
import DonateComponent from "../donate";
import DonationComponent from "../donation";
import Login from "../login";
import Register from "../register";
import LiveStreaming from "../livestream";
import Event_Details from "../event-detail";
import Galleries from "../galleries/index";
import Gallery from "../gallery";
import FirstTimers from "../first-timers";
import TestifyComponent from "../testify"
import PrayerRequestComponent from "../prayer-request"
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
  ErrorPage,
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
const HomeChurchAPI = "./utils/groupData.json";
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
    groupInfo: [], // will hold the results from our ajax call

  };
  //EVENT NEWS SLIDER
  componentDidMount() {
    //fetch event item and store it in the state
    this.setState({ loading: true }, () => {
      axios.get(eventAPI).then(result =>
        this.setState({
          loading: false,
          eventItemSlide: [...result.data]
        })
      );
    });

    this.setState({ loading: true }, () => {
      axios.get(TestimonialAPI).then(testimony =>
        this.setState({
          loading: false,
          testimonyItem: [...testimony.data]
        })
      );
    });


    //home church
    this.setState({ loading: true }, () => {
      axios.get(HomeChurchAPI).then(result =>
        this.setState({
          loading: false,
          groupInfo: [...result.data]
        })
      );
    });
  }

  //EVENT NEWS SLIDER
  render() {
    const { eventItemSlide, loading, testimonyItem, groupInfo } = this.state;
    return (
      <Fragment>
        <BrowserRouter forceRefresh={true}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
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
                </Fragment>
              )}
            />

            <Route path="/about" component={About} />
            <Route path="/sermon" component={SermonComponent} />
            <Route path="/contact" component={ContactUs} />
            {/* <Route path="/group" component={Group} homechurchInfo={groupInfo} loading={loading} /> */}
            <Route path="/group" render={() => (<Group homeCellLocation={groupInfo} loading={loading} />)} />
            <Route path="/events" component={Events} />
            <Route path="/give" component={DonateComponent} />
            <Route path="/donation" component={DonationComponent} />
            <Route
              exact
              strict
              path="/event/:eventID"
              component={Event_Details}
            />
            <Route path="/galleries" component={Galleries} />
            <Route exact path="/gallery/:id" component={Gallery} />
            <Route path="/live" component={LiveStreaming} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/partner" component={Member} />
            <Route path="/testify" component={TestifyComponent}/>
            <Route path="/prayer-request" component={PrayerRequestComponent}/>
            <Route path="/welcome" render={() => (<FirstTimers homechurchInfo={groupInfo} />)} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </BrowserRouter>
        {/* {console.log(homeCellLocation)} */}
      </Fragment>
    );
  }
}

export default Home;
