import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import About from "../about";
import SermonComponent from "../sermon";
import ContactUs from "../contact";
import Cell from "../cell";
import Events from '../event';
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

<<<<<<< HEAD
          <Route path="/about" component={About} />
          <Route path="/sermon" component={SermonComponent} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/cell" component={Cell} />
          <Route component={NotFound} />
        </Switch>
=======
        <Route path="/about" component={About} />
        <Route path="/sermon" component={SermonComponent} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={ContactUs} />
>>>>>>> d03e70114f5540c0d323daa50879775e22035e81
      </Fragment>
    );
  }
}

export default Home;
