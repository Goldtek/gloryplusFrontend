import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";
import About from "../about";
import SermonComponent from "../sermon";
import ContactUs from "../contact";
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
  Footer
} from "../../custom";

class Home extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Home;
