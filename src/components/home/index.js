import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import {
  Hero,
  Header,
  TopNav,
  EventTimer,
  JoinUs,
  ServiceSection,
  Donate,
  NewsLetter,
  Footer,
  // ErrorPage,
  Testimonial,
  EventSlider,
  VideoCard
} from "../../custom";

import './style.css';
/*----------------
MEMBERS IMPORT
----------------- */
import Member from "../member";

// declare constant for event api
const eventAPI = './utils/eventData.json';
const TestimonialAPI = './utils/testimonyData.json';

const Home = () => {
  const dispatch = useDispatch();
  const [eventItemSlide, setEventItemSlide] = useState([]);
  const [loading, setLoading] = useState(false);
  const [testimonyItem, setTestimonyItem] = useState([]);
  const [bibleVerse,setBibleVerse] = useState([]);
  const [error, setError] = useState(null);

  const { user } = useSelector(state => ({ user: state.User }));
  const { count  } = user;

  useEffect(() => {
    //fetch event item and store it in the state
      setLoading(true);
      axios.get(eventAPI).then((result) =>
        setEventItemSlide([...result.data])
      );
  
      axios.get(TestimonialAPI).then((testimony) =>{
        setTestimonyItem([...testimony.data])
      });
      setLoading(false);
      if(count === 0 || count === undefined) {
        dispatch({ type: 'UPDATE_COUNT'});
      }
  },[count]);


  return (
    <>
      <TopNav />
      <Header />
      <Hero />
      <EventTimer />
      <JoinUs fade="zoom-in" duration="1300" ease="ease-in-sine" />
      <ServiceSection />
      {/* <Testimonial tesmonies={testimonyItem} /> */}
     
      <section class="blog-section">
        <div class="container">
        <div class="section-title">
        <span>Demonstration of the Power of the Holy Ghost</span>
        </div>
        <div className="row"> 
          <VideoCard key={2} src="https://res.cloudinary.com/dvxptc5uy/video/upload/v1615592910/sermons/Manifestations_HGM_Lagos_wlgvng.mp4"/>
          <VideoCard key={2} src="https://res.cloudinary.com/dvxptc5uy/video/upload/v1615593256/sermons/153995124_117331640333315_1427019334237865197_n_bw7onj.mp4"/>
          <VideoCard key={2} src="https://res.cloudinary.com/dvxptc5uy/video/upload/v1615593445/sermons/144497262_459994091697928_1009572661530177243_n_qy6ivk.mp4"/>         
        </div>
        </div>
      </section>
      <EventSlider newslides={eventItemSlide} loading={loading} />
      <Donate />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
