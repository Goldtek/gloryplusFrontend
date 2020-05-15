import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Helmet>
          <title>Foundation Class</title>
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
              <h3 className="text-primary" style={widget}>  Foundation class title</h3>
              <h6 className="text-danger"> may 6, 2020 @ 7am </h6>
              <hr />
              <button className="btn btn-default" disabled> Join class</button>
            </div>
            <div className="col-md-4 align-center">
              <hr />
              <hr className="hidden-xs hidden-sm" />
              <hr className="hidden-xs hidden-sm" />
              <button className="btn btn-primary">
                {' '}
                <span className="glyphicon glyphicon-time" />
                {' '}
Reshedule Class
              </button>
            </div>
          </div>
          <div className="row" style={marginTop}>
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" href="#collapse1">Next on List <span class="glyphicon glyphicon-chevron-down"></span> </a>   
                  </h4>
                </div>
                <div id="collapse1" className="panel-collapse collapse">
                <table class="table table-responsive">
                    <tbody>
                    <tr>
                        <td>The new birth.</td>
                        <td>May 5, 2020 @ 7am</td>
                        <td> <button className="btn btn-default"> <span class="glyphicon glyphicon-time"></span>  Reschedule</button></td>
                    </tr>
                    <tr>
                        <td>Assurance of salvation</td>
                        <td>May 5, 2020 @ 7am</td>
                        <td> <button className="btn btn-default"> <span class="glyphicon glyphicon-time"></span>  Reschedule</button></td>
                    </tr>
                    <tr>
                        <td>Christain Devotion</td>
                        <td>May 5, 2020 @ 7am</td>
                        <td> <button className="btn btn-default"> <span class="glyphicon glyphicon-time"></span>  Reschedule</button></td>
                    </tr>
                    </tbody>
                </table>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Lessons;
