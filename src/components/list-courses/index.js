import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import {
  Header,
  TopNav,
  Footer,
  PageInfo,
} from '../../custom';
import {
  ContainerSize, Top, Image, widget, marginTop,
} from './style';
// eslint-disable-next-line react/prefer-stateless-function
class Lessons extends Component {
  // this dashboard
  state = {
    disabled: moment().year(2020).month(4).date(26).hour(0).isSame(moment().get()),
    previous: [],
  };

  componentDidMount(){
    this.fetchScheduledCourse();
  }

  fetchScheduledCourse = async () => {
    const { userId } = this.props.match.params;
    console.log('user', this.props.User);
    const api_url = process.env.REACT_APP_BASE_URL;
    const { data } = await axios.get(`${api_url}/schedule/userId`);
    const { schedule } = data;
    console.log('schedule', schedule);
    // split get the current lesson, previous and next lessons, seperate and get the course, imagepath
    this.setState({ schedule });
  }

  render() {
    const { disabled, previous } = this.state;
    
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Helmet>
          <title>Gloryplus International Foundation Class</title>
          <meta name="description" content="Foundation Class" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Dashboard" bgPicture="url(img/bg-info/login.png)" />
        <div className="container" style={ContainerSize}>
          <div className="row" style={Top}>
            <div className="col-md-4">
              <img src="img/event/workers.jpg" className="img-rounded" alt="Cinque Terre" style={Image} />
            </div>
            <div className="col-md-4">
              <hr className="hidden-md hidden-lg" />
              <h3 className="text-primary" style={widget}>  Assurance Of Salvation </h3>
              <h6 className="text-danger"> may 6, 2020 @ 7am </h6>
              <hr />
              <button className="btn btn-default" disabled={!disabled}> Join Class</button>
            </div>
            <div className="col-md-4 align-center">
              <hr />
              <hr className="hidden-xs hidden-sm" />
              <hr className="hidden-xs hidden-sm" />
              <Link to="/reschedule/59696970" className="btn btn-primary">
                {' '}
                <span className="glyphicon glyphicon-time" />
                {' '}
                Reshedule Class
              </Link>
            </div>
          </div>
          
          <div className="row" style={marginTop}>
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" href="#collapse1">
                    <label className="tab-label" htmlFor="next">
                      Next on List 
                      </label>
                      </a>   
                  </h4>
                </div>
                <div id="collapse1" className="panel-collapse collapse">
                <table className="table table-responsive">
                    <tbody>
                    <tr>
                        <td>The new birth.</td>
                        <td>May 5, 2020 @ 7am</td>
                        <td> <Link to="/reschedule/59696970" className="btn btn-default"> <span className="glyphicon glyphicon-time"></span>  Reschedule</Link></td>
                    </tr>
                    <tr>
                        <td>Assurance of salvation</td>
                        <td>May 5, 2020 @ 7am</td>
                        <td> <Link to="/reschedule/59696970" className="btn btn-default"> <span className="glyphicon glyphicon-time"></span>  Reschedule</Link></td>
                    </tr>
                    <tr>
                        <td>Christain Devotion</td>
                        <td>May 5, 2020 @ 7am</td>
                        <td> <Link to="/reschedule/59696970" className="btn btn-default"> <span className="glyphicon glyphicon-time"></span>  Reschedule</Link></td>
                    </tr>
                    </tbody>
                </table>
                 
                </div>
              </div>
            </div>
          </div>

        {previous.length>0 && (
          <div className="row" style={marginTop}>
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" href="#previous">
                    <label className="tab-label" htmlFor="next">
                      Previous classes
                      </label>
                      </a>   
                  </h4>
                </div>
                <div id="previous" className="panel-collapse collapse">
                <table className="table table-responsive">
                    <tbody>
                    <tr>
                        <td>  Lesson 1</td>
                        <td>The new birth.</td>
                        <td>  Watch </td>
                    </tr>
                    <tr>
                        <td>  Lesson 2</td>
                        <td>Assurance of salvation</td>
                        <td>  Watch </td>
                    </tr>
                    <tr>
                    <td>  Lesson 3</td>
                        <td>Christain Devotion</td>
                        <td>  Watch </td>
                    </tr>
                    </tbody>
                </table>
                 
                </div>
              </div>
            </div>
          </div>
       )}
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

export default connect(mapStateToProps)(Lessons);
