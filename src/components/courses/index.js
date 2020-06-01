import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  CourseItem,
} from '../../custom';
import { ContainerSize } from './styles';
// eslint-disable-next-line react/prefer-stateless-function
class Courses extends Component {

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses = async () => {
    const res = await axios.get("./utils/classData.json");
    this.setState({ courses: res.data });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Helmet>
          <title>Courses</title>
          <meta name="description" content="Courses" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo title="Courses" bgPicture="url(img/bg-info/login.png)" />
        <div className="container" style={ContainerSize}>
          <div className="row">
            <CourseItem imagePath="img/event/workers.jpg" title="Foundation School" id="1" />
            <CourseItem imagePath="img/event/workers.jpg" title="GloryPlus Leadership Institue" id="2" />
            <CourseItem imagePath="img/event/workers.jpg" title="GloryPlus Leadership Institue" id="3" />
          </div>
          <div className="row">
            <CourseItem imagePath="img/event/workers.jpg" title="Foundation School" />
            <CourseItem imagePath="img/event/workers.jpg" title="GloryPlus Leadership Institue" />
            <CourseItem imagePath="img/event/workers.jpg" title="GloryPlus Leadership Institue" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Courses;
