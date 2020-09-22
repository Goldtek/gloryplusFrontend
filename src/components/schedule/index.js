import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Alert from 'react-bootstrap/Alert';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Select from 'react-select';
import axios from 'axios';
import swal from 'sweetalert';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";

import {
  Header,
  TopNav,
  Footer,
  PageInfo,

} from '../../custom';

import './styles.css';

const apiUrl = process.env.REACT_APP_BASE_URL;
// eslint-disable-next-line react/prefer-stateless-function
class Schedule extends Component {
  state = {
    day1Time: '',
    date1: '',
    day2Time: '',
    date2: '',
    startWeek: moment(new Date()).weeks() + 1, // current week + 1;
    firstDayOfTheWeek: moment().startOf('week').week(moment(new Date()).weeks() + 1).toDate(),
    startDate: new Date(),
    daysOFWeek: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    options:  [
                  { value : "", label : 'Select Time' },
                  { value : "0", label : '12am' },{ value : "1", label : '1am' },{ value : "2", label : '2am' },
                  { value : "3", label : '3am' },{ value : "4", label : '4am' },{ value : "5", label : '5am' },
                  { value : "6", label : '6am' },{ value : "7", label : '7am' },{ value : "8", label : '8am' },
                  { value : "9", label : '9am' },{ value : "10", label : '10am' },{ value : "11", label : '11am' },
                  { value : "12", label : '12pm' },{ value : "13", label : '1pm' },{ value : "14", label : '2pm' },
                  { value : "15", label : '3pm' },{ value : "16", label : '4pm' },{ value : "17", label : '5pm' },
                  { value : "18", label : '6pm' },{ value : "19", label : '7pm' },{ value : "20", label : '8pm' },
                  { value : "21", label : '9pm' },{ value : "22", label: '10pm '}, { value : "23", label: '11pm' }
    ],
    disabled: false,
    firstDayOfSelectedWeek: moment().startOf('week').week(moment(new Date()).weeks() + 1).toDate(),
    lastDayOfSelectedWeek: moment().endOf('week').week(moment(new Date()).weeks() + 1).toDate()
  };

  handleDayOneDate = (date) => {
    const selectedWeek = moment(date).weeks();
  //  const firstDayOfSelectedWeek = moment().startOf('week').week(selectedWeek).toDate();
    const lastDayOfSelectedWeek = moment().endOf('week').week(selectedWeek).toDate();
    this.setState({ date1: date, firstDayOfSelectedWeek: date, lastDayOfSelectedWeek, date2: '', day2Time: '' , selectedWeek });
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

  scheduleClass = async () => {
    const { day1Time, day2Time, date1, date2, selectedWeek } = this.state;
    const { id } = this.props.match.params;
    if(day1Time !== '' && day2Time !== '' && date1 !== '' && date2 !== '' && selectedWeek !== undefined) {
      this.setState({ loading: true , disabled: true});
      // userId
      const data = { day1Time, day2Time, date1, date2, courseId: id, week: selectedWeek, userId: "5dea2b352dda1d00043e74ec" };
      let axiosConfig = {
       headers: {
        'Content-Type': 'application/json',
        'x-access-token': ''
      }
    };
      try {
        const { data: response } = await axios.post(`${apiUrl}/schedule`, data, axiosConfig);
        if(response.success) {
          swal("INFO!", response.message, "success");
           //  go to dashboard
        } else {
         swal("INFO!", response.message, "error");
        }
        
      } catch (error) {
        console.log('error', error)
        swal("INFO!", error.message, "error");
      }
      this.setState({ loading: false , disabled: false});
    } else {
      swal("ERROR!", "All fields are required!!!", "error");
    }
  }

  render() {
    const { day1Time, day2Time, date1, date2, daysOFWeek, options, firstDayOfTheWeek, firstDayOfSelectedWeek, lastDayOfSelectedWeek  } = this.state;
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
            <div className="col-md-3">
              <DatePicker
               selected={date1}
                minDate={firstDayOfTheWeek}
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
                minDate={firstDayOfSelectedWeek}
                maxDate={lastDayOfSelectedWeek}
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

const mapStateToProps = ({ User }) => {
  return {
    User,
  };
};

export default connect(mapStateToProps)(Schedule);
