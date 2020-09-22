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
  state = {
    courses: [],
  };

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses = async () => {
    const api_url = process.env.REACT_APP_BASE_URL;
    const { data } = await axios.get(`${api_url}/courses`);
    const { courses } = data;
    this.setState({ courses });
  }

  renderCourses = () => {
   const { courses } = this.state;
   console.log('course', courses);
    if(courses.length > 0 ){
    return courses.map((course, index) =>  <CourseItem imagePath={course.imagePath} title={course.title} id={course._id} /> );
    } else {
      // return empty component
    }
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
            {this.renderCourses()}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Courses;
