import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import About from './about';
import SermonComponent from './sermon';
import ContactUs from './contact';
import Group from './group';
import Events from './event';
import DonateComponent from './donate';
import DonationComponent from './donation';
import Login from './login';
import Register from './register';
import LiveStreaming from './livestream';
import EventDetails from '../custom/event-detail';
import Galleries from './galleries';
import SingleGallery from './gallery';
import TestifyComponent from './testify';
import PrayerRequestComponent from './prayer-request';
import Courses from './courses';
import Schedule from './schedule';
import Lessons from './list-courses';
import Video from './class_video';
import Home from './home';
import Membership from './membership';
import Basic from './basic';
import Pricing from './pricing';
import Dashboard from './dashboard';
import Cart from './cart';
import Checkout from './checkout';
import Download from './download';
import Success from './success';
import {
  ErrorPage, history,
} from '../custom';
/*----------------
MEMBERS IMPORT
----------------- */
import Member from './member';
import Unleash from './unleash';
import UnleashLogin from './unleash-login';
import UnleashLivestream from './unleash-livestream';


const Routes = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Router forceRefresh history={history}>
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />

      <Route path="/unleash/livestream" component={UnleashLivestream} />

      <Route path="/unleash/register" component={Unleash} />
      <Route path="/unleash/login" component={UnleashLogin} />

      <Route path="/about" component={About} />
      <Route path="/sermon" component={SermonComponent} />
      <Route path="/contact" component={ContactUs} />
      {/* <Route path="/group" component={Group} homechurchInfo={groupInfo} loading={loading} /> */}
      <Route
        path="/group"
        component={Group}
      />
      <Route
        path="/cart"
        component={Cart}
      />
      <Route path="/checkout" component={Checkout} />
      <Route path="/download" component={Download} />
      <Route path="/success" component={Success} />

      <Route
        exact
        strict
        path="/event/:id"
        component={EventDetails}
      />
      <Route path="/events" component={Events} />
      <Route path="/give" component={DonateComponent} />
      <Route path="/donation" component={DonationComponent} />
      <Route exact strict path="/event/:eventID" component={EventDetails} />
      <Route path="/galleries" component={Galleries} />
      <Route exact path="/gallery/:id" component={SingleGallery} />
      <Route path="/live" component={LiveStreaming} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/partner" component={Member} />
      <Route path="/testify" component={TestifyComponent} />
      <Route path="/prayer-request" component={PrayerRequestComponent} />
      <Route exact path="/courses" component={Courses} />
      <Route path="/schedule/:id" component={Schedule} />
      <Route exact path="/reschedule/:id" component={Schedule} />
      <Route exact path="/dashboard/:userId" component={Lessons} />
      <Route exact path="/class/:id" component={Video} />
      <Route path="/membership" component={Membership} />
      <Route path="/basic" component={Basic} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </Router>
);

export default Routes;
