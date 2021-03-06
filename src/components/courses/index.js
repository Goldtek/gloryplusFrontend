import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { firestore } from '../../custom/firebase';

import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  CourseItem,
} from '../../custom';
import { ContainerSize, courseAv } from './styles';
// eslint-disable-next-line react/prefer-stateless-function
const Courses = () => {
  
  const[courses,SetCourses] = useState([]);
  
  useEffect(()=> {
    fetchCourses();
  },[])
    

  const fetchCourses = async () => {
    const doc = await firestore.collection('courses').get();
    if (!doc.exists) {
      console.log('courses available');
    } else {
      SetCourses(doc.data());
    }
  }

  const renderCourses = () => {
    if(courses.length > 0 ){
    return courses.map((course, index) =>  <CourseItem imagePath={course.imagePath} title={course.title} id={course._id} /> );
    } else {
      return (
        <div className="container">
          <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-7">
              <img src="img/empty.jpeg" style={{ height: '400px',}} />
              <div style={courseAv}>
                No Course available
              </div>
             
            </div>
          </div>
        </div>
      );
    }
  }

  
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
            {renderCourses()}
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Courses;
