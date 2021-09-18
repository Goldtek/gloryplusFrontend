/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/core';
import { DotLoader } from 'react-spinners';  
import _ from 'lodash';                                                                                                                                                                    
import { useDispatch, useSelector } from 'react-redux';

import { handleError } from '../../lib/util';
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  GroupList,
  auth, 
  firestore,
  Map
} from '../../custom';
import './group.css';

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;




const HomeChurch = () => {
  const [groupInfo, setGroupInfo] = useState([]); // restructured cells array
  const [cells, setCells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentLocation, setLocation] = useState({lat: 6.589953434977126, lng: 3.375679742065203 });
  const [locations, setLocations] = useState([]);

  useEffect(()=> {
    fetchCells();
  },[])

  const fetchCells = async () => {
    await firestore.collection('cells')
    .onSnapshot((querySnapshot) => {
      const results = [];
      const restructured = [];
      querySnapshot.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()});
      });

      const cellMap = _(results)
      .groupBy(cell => cell.city)
      .map((value, key) => ({ "grpId": key, location_Details: value }))
      .value();
  
      for(let cell of results) {
        restructured.push(
          {
            coordinator: cell.coordinator,
            address: cell.address, 
            lng: cell.coordinates.lng, 
            lat: cell.coordinates.lat, 
            id: cell.id, 
            phone: cell.phone 
          });
      }

      setCells(cellMap);
      setGroupInfo(results);
      setLoading(false);
      setLocations(restructured);
    }, handleError);
  }

    // geocode.fromAddress(address).then(
    //   response => {
    //   const coordinates = response.results[0].geometry.location;
    //   console.log('coords', coordinates);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );


    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Helmet>
          <title>Gloryplus International Homecell locations - Cell Groups</title>
          <meta name="description" content="home church" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title="Home Church"
          bgPicture="url(img/bg-info/homecell.jpg)"
        />
        {loading ? (
          <div style={{ minHeight: '25vh' }}>
            <div className="col-md-4" />
            <div
              className="col-md-4"
              style={{
                marginTop: '35px',
                marginBottom: '20px',
              }}
            >
              {' '}
              <DotLoader
                css={override}
                sizeUnit="px"
                size={50}
                color="#b42b2b"
              />
            </div>
            <div className="col-md-4" />
          </div>
        ) : (
          <>
          <Map locations={locations} zoomLevel={11} currentLocation={currentLocation} /> 
          <GroupList homechurchInfo={cells} />
          </>
        )}

        <NewsLetter />
        <Footer />
      </>
    );
  }

export default HomeChurch;
