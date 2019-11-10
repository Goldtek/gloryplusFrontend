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

class SermonComponent extends Component {
  constructor() {
    super();
    this.state = {
      liveStream: 'Yes'
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
<<<<<<< HEAD
        <PageInfo title="Sermon" bgPicture="url(img/sermon-info.jpg)" />

        <Sermon
          title="Doing Big things for God"
          preacher="Rev Dubus Achufusi"
          content="The God we serve is big. He created and designed us to do big things.
         His predetermined purpose for creating us was to accomplish great things on earth.God designed you for exploits.
        Shake yourself off the dust of limitation and begin to do exploits."
        />
        <BottomNav />
=======
        <PageInfo title="Sermon" />
        <h2 className='online-church' align="center">ONLINE CHURCH</h2>
        <hr style={{ color: '#E8E8E8'}}/>
        <div className='container'>
          <div class="embed-responsive embed-responsive-16by9">
              <iframe poster='http://site.com/img.jpg' title='live-stream' className="embed-responsive-item loop controls" src="https://mdbootstrap.com/img/video/Sail-Away.mp4" ></iframe>
          </div>
        
        </div>
        <Sermon title="Doing Big things for God" preacher="Rev Dubus Achufusi" content="The God we serve is big. He created and designed us to do big things.
         His predetermined purpose for creating us was to accomplish great things on earth.God designed you for exploits.
        Shake yourself off the dust of limitation and begin to do exploits." />
        <hr />
>>>>>>> add live stream
        <SermonList />
        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default SermonComponent;
