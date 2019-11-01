import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import About from "../about";
import SermonComponent from "../sermon";
import ContactUs from "../contact";
import Group from "../group";
import Events from "../event";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  Hero,
  Header,
  TopNav,
  BottomNav,
  JoinUs,
  ServiceSection,
  UpcomingEvent,
  Donate,
  NewsLetter,
  Blog,
  Footer,
  NotFound
} from "../../custom";

class Home extends Component {
  render() {
    return (
      <Fragment>
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
                <BottomNav />
                <JoinUs />
                <ServiceSection />
                <UpcomingEvent />
                <Donate />
                <Blog />
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
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default Home;
