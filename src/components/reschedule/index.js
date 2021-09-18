import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Select from 'react-select';
import axios from 'axios';
import swal from 'sweetalert';

import "react-datepicker/dist/react-datepicker.css";



import {
  Header,
  TopNav,
  Footer,
  PageInfo,

} from '../../custom';

import './styles.css';
// eslint-disable-next-line react/prefer-stateless-function
class Reschedule extends Component {
  state = {
    day1Time: '',
    date1: '',
    day2Time: '',
    date2: '',
    startDate: new Date(),
    daysOFWeek: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    options:  [
                  { value : "", label : 'Select Time' },
                  { value : "0", label : '12am' },{ value : "1", label : '1am' },{ value : "2", label : '2am' },
                  { value : "3", label : '3am' },{ value : "4", label : '4am' },{ value : "5", label : '5am' },
                  { value : "6", label : '6am' },{ value : "7", label : '7am' },{ value : "8", label : '8am' },
                  { value : "9", label : '9am' },{ value : "10", label : '10am' },{ value : "11", label : '11am' },
                  { value : "12", label : '1pm' },{ value : "13", label : '2pm' },{ value : "14", label : '3pm' },
                  { value : "15", label : '4pm' },{ value : "16", label : '5pm' },{ value : "17", label : '6pm' },
                  { value : "18", label : '7pm' },{ value : "19", label : '8pm' },{ value : "20", label : '9pm' },
                  { value : "21", label: '10pm '}, { value : "22", label: '11pm' },{ value : "23", label: '12pm' }
    ],
    disabled: false,
  };

  handleDayOneDate = (date) => {
    this.setState({ date1: date });
  }


  handleDayTwoDate = (date) => {
    this.setState({ date2: date });
  }

  handleDay1Time = (selectedTime) => {
    this.setState({ day1Time: selectedTime.value });
  }

  handleDay2Time = (selectedTime) => {
    this.setState({ day2Time: selectedTime.value });
  }

  scheduleClass = () => {
    const { day1Time, day2Time, date1, date2 } = this.state;
    const { id } = this.props.match.params;
    this.setState({ loading: true , disabled: true});
    //swal("INFO!", "Your Class is been scheduled", "success");
    // perform axios call here
    // on return go to dashboard
  }

  render() {
    const { day1Time, day2Time, date1, date2, daysOFWeek, options } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <TopNav />
        <Header />
        <PageInfo title="Reschedule Class" bgPicture="url(img/bg-info/login.png)" />
        <div className="container" style={{ minHeight: '60vh' }}>
          <div className="row" style={{ marginTop: '50px' }}>
            <Alert show variant="success">
              <Alert.Heading>Schedule your class</Alert.Heading>
              <p> Pick 2 days in a week for your online classes and what time you want to attend the classes.  </p>
            </Alert>
          </div>
          <div className="row">
            <div className="col-md-3">
              <DatePicker
               selected={date1}
                minDate={new Date()}
                onChange={this.handleDayOneDate}
                placeholderText="Select date for first day "
              />
            </div>
            <div className="col-md-6" />
            <div className="col-md-3">
              <div className="form-group">
                  <label>Time for Day 1</label>
                  <Select isSearchable options={options} onChange={this.handleDay1Time} />
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 ">
              <DatePicker
                onChange={this.handleDayTwoDate}
                selected={date2}
                minDate={new Date()}
                placeholderText="Select date for second day "
              />
            </div>
            <div className="col-md-6" />
            <div className="col-md-3">
              <div className="form-group">
                <label>Time for Day 2</label>
                <Select isSearchable options={options} onChange={this.handleDay2Time} />  
              </div>
              
            </div>
          </div>
      
            <div className="row" style={{ marginTop: '30px' }}>
              <Alert show variant="info">
                <Alert.Heading>Your Foundation class Schedule -- </Alert.Heading>
                <p>
                  {' '}
                  {(date1 && day1Time) || (date2 && day2Time) ? 'Your lessons are on every' : '' } 
                      {(date1 && day1Time) && (
                        <span className="green"> {daysOFWeek[moment(date1).day()-1]} by {moment(day1Time, 'HH').format('hha')} </span>
                      )}
                    {(date1 && day1Time) ?  'and on' : '' } 
                     {(date2 && day2Time) && (
                        <span className="green"> {daysOFWeek[moment(date2).day()-1]} by {moment(day2Time, 'HH').format('hha')} </span>
                      )}
                  {' '}
                </p>
              </Alert>
            </div>
          
          <div className="row">
            <div className="col-md-4">
              <button type="button" className="btn btn-success btn-md" onClick={this.scheduleClass} disabled={this.state.disabled}>
                {(!this.state.loading) ? 
                  <>
                 <span className="glyphicon glyphicon-time"></span>
                  <span> {' '} Schedule</span> 
                  </>
                  :
                  <>
                  <span className="fas fa-spinner fa-pulse"></span>
                  <span>  {' '} Loading...</span>
                  </>
                }
                  
              </button>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }
}

export default Reschedule;
