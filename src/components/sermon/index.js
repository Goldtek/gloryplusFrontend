import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  BottomNav,
  NewsLetter,
  Footer,
  Sermon,
  PageInfo,
  SermonList
} from "../../custom";

const styles = {
  background: '#737373'
}

class SermonComponent extends Component {
  constructor() {
    super();
    this.state = {
      liveStream: 'false',
    }
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Sermon</title>
          <meta name="description" content="Sermon " />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Sermon" />
        <h2 className='online-church' align="center">ONLINE CHURCH</h2>
        <hr style={{ color: '#E8E8E8'}}/>
        <div className='container'>
          {
            this.state.liveStream ? (
              <div className="embed-responsive embed-responsive-16by9 vp-text-alert-wrapper">
                <div className="vp-alert-text hidden"></div>
                <div className="vp-alert-time">
                  <div className="vp-live-start-time-title">
                    This event is scheduled for
                  </div>
                  <div className="vp-live-start-time-body">
                    November 17
                  </div>
                  <div className="vp-live-start-time-footer">at 9:00 AM</div>
                </div>
                
              </div>
            ) : (
              <div className="embed-responsive embed-responsive-16by9">
                <iframe poster='http://site.com/img.jpg' title='live-stream' className="embed-responsive-item loop controls" src="rtmps://live-api-s.facebook.com:443/rtmp/" ></iframe>
              </div>
            )
          }
          
          
          
        
        </div>
        <Sermon title="Doing Big things for God" preacher="Rev Dubus Achufusi" content="The God we serve is big. He created and designed us to do big things.
         His predetermined purpose for creating us was to accomplish great things on earth.God designed you for exploits.
        Shake yourself off the dust of limitation and begin to do exploits." />
        <hr />
        <SermonList />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default SermonComponent;
