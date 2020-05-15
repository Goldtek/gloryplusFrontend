import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import {
  Header,
  TopNav,
  Footer,
  PageInfo,

} from '../../custom';

import './styles.css';
// eslint-disable-next-line react/prefer-stateless-function
class Schedule extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Helmet>
          <title>Schedule</title>
          <meta name="description" content="Schedule" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Schedule Class" bgPicture="url(img/bg-info/login.png)" />
        <div className="container" style={{ minHeight: '60vh' }}>
          <div className="row" style={{ marginTop: '50px' }}>
            <Alert show variant="success">
              <Alert.Heading>Schedule your class</Alert.Heading>
              <p> Pick 2 days in a week for your online classes and what time you want to attend the classes.  </p>
            </Alert>
          </div>
          <div className="row">
            <div className="col-md-3 form-group">
              <div className="form-input">
                <label>Select Date For Day 1</label>
                <input type="date" name="" className="form-control" placeholder="Day 1" />
              </div>
            </div>
            <div className="col-md-6" />
            <div className="col-md-3">
              <div className="form-group">
                <label>Time For Day 1</label>
                <select className="form-control">
                  <option value="">Select Time</option>
                  <option value="1am">1am</option>
                  <option value="2am">2am</option>
                  <option value="3am">3am</option>
                  <option value="4am">4am</option>
                  <option value="5am">5am</option>
                  <option value="6am">6am</option>
                  <option value="7am">7am</option>
                  <option value="8am">8am</option>
                  <option value="9am">9am</option>
                  <option value="10am">10am</option>
                  <option value="11am">11am</option>
                  <option value="12am">12am</option>
                  <option value="1pm">1pm</option>
                  <option value="2pm">2pm</option>
                  <option value="3pm">3pm</option>
                  <option value="4pm">4pm</option>
                  <option value="5pm">5pm</option>
                  <option value="6pm">6pm</option>
                  <option value="7pm">7pm</option>
                  <option value="8pm">8pm</option>
                  <option value="9pm">9pm</option>
                  <option value="10pm">10pm</option>
                  <option value="11pm">11pm</option>
                  <option value="12pm">12pm</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 form-group">
              <div className="form-input">
                <label>Select Date For Day 2</label>
                <input type="date" name="" className="form-control" placeholder="Day 2" />
              </div>
            </div>
            <div className="col-md-6" />
            <div className="col-md-3">
              <div className="form-group">
                <label>Time for Day 2</label>
                <select className="form-control" id="sel1">
                  <option value="">Select Time</option>
                  <option value="1am">1am</option>
                  <option value="2am">2am</option>
                  <option value="3am">3am</option>
                  <option value="4am">4am</option>
                  <option value="5am">5am</option>
                  <option value="6am">6am</option>
                  <option value="7am">7am</option>
                  <option value="8am">8am</option>
                  <option value="9am">9am</option>
                  <option value="10am">10am</option>
                  <option value="11am">11am</option>
                  <option value="12am">12am</option>
                  <option value="1pm">1pm</option>
                  <option value="2pm">2pm</option>
                  <option value="3pm">3pm</option>
                  <option value="4pm">4pm</option>
                  <option value="5pm">5pm</option>
                  <option value="6pm">6pm</option>
                  <option value="7pm">7pm</option>
                  <option value="8pm">8pm</option>
                  <option value="9pm">9pm</option>
                  <option value="10pm">10pm</option>
                  <option value="11pm">11pm</option>
                  <option value="12pm">12pm</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: '30px' }}>
            <Alert show variant="info">
              <Alert.Heading>Your Foundation class Schedule -- </Alert.Heading>
              <p>
                {' '}
                    Your lessons are on every
                <span className="green"> Monday by 6am </span>
                {' '}
                    and on
                <span className="green"> Friday by 1pm</span>
                {' '}
              </p>
            </Alert>
          </div>
          <div className="row">
            <div className="col-md-4">
              <button type="button" className="btn btn-success btn-md"> <span class="glyphicon glyphicon-time"></span> Schedule </button>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }
}

export default Schedule;
