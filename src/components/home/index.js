import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useDispatch } from 'react-redux';

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
} from "../../custom";

import './style.css';
/*----------------
MEMBERS IMPORT
----------------- */
import Member from "../member";
import { useSelector } from "react-redux";

// declare constant for event api
const eventAPI = "./utils/eventData.json";
const TestimonialAPI = "./utils/testimonyData.json";

const Home = () => {
  const dispatch = useDispatch();
  const [eventItemSlide, setEventItemSlide] = useState([]);
  const [loading, setLoading] = useState(false);
  const [testimonyItem, setTestimonyItem] = useState([]);
  const [bibleVerse,setBibleVerse] = useState([]);
  const [error, setError] = useState(null);

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
  },[]);


  return (
    <>
      <Helmet>
        <title>Glory Plus</title>
        <meta name="description" content="Home" />
      </Helmet>
      <TopNav />
      <Header />
      <Hero />
      <EventTimer />
      <JoinUs fade="zoom-in" duration="1300" ease="ease-in-sine" />
      <EventSlider newslides={eventItemSlide} loading={loading} />
      <ServiceSection />
      <Testimonial tesmonies={testimonyItem} />
      <Donate />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
