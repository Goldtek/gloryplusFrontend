import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  Hero,
  Header,
  TopNav,
  EventTimer,
  JoinUs,
  ServiceSection,
  // UpcomingEvent,
  Donate,
  NewsLetter,
  PopularSermon,
  Footer,
  NotFound
} from "../../custom";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Router>
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
                  <JoinUs />
                  <ServiceSection />
                  {/* <UpcomingEvent /> */}
                  <Donate />
                  <PopularSermon />
                  <NewsLetter />
                  <Footer />
                </Fragment>
              )}
            />

            <Route path="/about" component={About} />
            <Route path="/sermon" component={SermonComponent} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/group" component={Group} />
            <Route path="/events" component={Events} />
            <Route path="/donate" component={DonateComponent} />
            <Route path="/donation" component={DonationComponent} />
            <Route exact path="/event/:eventID" component={Event_Details} />
            <Route path="/galleries" component={Galleries} />
            <Route exact path="/gallery/:id" component={Gallery} />
            <Route path="/live" component={LiveStreaming} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default Home;
