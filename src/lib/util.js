import { v4 as uuidv4 } from 'uuid';
import { auth, firestore } from '../custom';
import _ from 'lodash';

import { ws, RAVE_PUBLIC_KEY } from './constant';

export const calculateStateFromProps = ({
  dateTo,
  numberOfFigures = 0,
  mostSignificantFigure = 0,
}) => {
  const currentDate = new Date();
  const targetDate = new Date(dateTo);
  const diff = targetDate - currentDate;
  let significance = ['year', 'month', 'day', 'hour', 'min', 'sec'];

  let year = Math.floor(diff / 31104000000); // time diff in years
  let month = Math.floor((diff / 2592000000) % 12); // time diff in months (modulated to 12)
  let day = Math.floor((diff / 86400000) % 30); // time diff in days (modulated to 30)
  let hour = Math.floor((diff / 3600000) % 24); // time diff's hours (modulated to 24)
  let min = Math.floor((diff / 60000) % 60); // time diff's minutes (modulated to 60)
  let sec = Math.floor((diff / 1000) % 60); // time diff's seconds (modulated to 60)

  if (mostSignificantFigure === 'none') {
    if (year === 0) {
      significance = significance.slice(1);
      if (month === 0) {
        significance = significance.slice(1);
        if (day === 0) {
          significance = significance.slice(1);
          if (hour === 0) {
            significance = significance.slice(1);
            if (min === 0) {
              significance = significance.slice(1);
            }
          }
        }
      }
    }
  } else {
    significance = significance.slice(
      significance.indexOf(mostSignificantFigure),
    );
  }
  significance = significance.slice(0, numberOfFigures);

  if (significance.indexOf('year') === -1) {
    month += year * 12;
    year = 0;
  }
  if (significance.indexOf('month') === -1) {
    day += month * 30;
    month = 0;
  }
  if (significance.indexOf('day') === -1) {
    hour += day * 24;
    day = 0;
  }
  if (significance.indexOf('hour') === -1) {
    min += hour * 60;
    hour = 0;
  }
  if (significance.indexOf('min') === -1) {
    sec += min * 60;
    min = 0;
  }

  return {
    speed: 250,
    diff,
    significance,
    year,
    month,
    day,
    hour,
    min,
    sec,
  };
};

export const storeTrackInfo = (user) => {
  const strUser = JSON.stringify(user);
  ws.setItem('user', strUser);
};

export const download = async (amt, title) => {
  const user = ws.getItem('user');
  const extUser = JSON.parse(user);
  if (user === undefined || user === null) {
    return window.$('#modalBox').modal('show');
  }
  const { email, phone, name } = extUser;
  const url = 'http://wwww.gloryplusinternational.org/sermon';
  const metaData = {
    metaname: title, 
    metavalue: uuidv4(),
  };

  const customer = {
    email,
    name,
    phone_number: phone,
  };
  window.payWithRave(phone, amt, email, metaData, url, customer, RAVE_PUBLIC_KEY);
};

export const Give = (seedDetails) => {
  const {
    phone, amount: amt, email, name, title, id,
  } = seedDetails;
  const url = 'http://wwww.gloryplusinternational.org/give'; // redirect url
  const metaData = {
    metaname: title, // name of item
    metavalue: id, // id of item paid for
  };
  const customer = {
    email,
    name,
    phone_number: phone,
  };
  window.payWithRave(phone, amt, email, metaData, url, customer, RAVE_PUBLIC_KEY);
};

export const handleError = (error) => {
    console.log('Error Subscribing: ', error);
  };

export const fetchCells = async (dispatch) => {
    await firestore.collection('cells')
        .onSnapshot((querySnapshot) => {
        let cells = [];
        querySnapshot.forEach((doc) => {
            cells.push(doc.data());
        });
        cells = _.orderBy(cells, ['name'],['asc'])
        dispatch({ type: 'SET_CELLS', cells });
    }, handleError);
}

export const fetchCountry = async (dispatch) => {
    await firestore.collection('countries')
        .onSnapshot((querySnapshot) => {
        let countries = [];
        querySnapshot.forEach((doc) => {
            countries.push(doc.data());
        });
        countries = _.orderBy(countries, ['name'],['asc']);
        let mapped_countries = _.keyBy(countries, 'id'); 
        dispatch({ type: 'FETCH_COUNTRIES', countries, mapped_countries });
    }, handleError);
}

export const fetchStates = async (dispatch,id) => {
    const query = await firestore.collection('states').where('country_id','==', id).get();
    let states = [];
    if(!query.empty){
        query.docs.map((snapshot)=> states.push(snapshot.data()));
        states = _.orderBy(states, ['name'],['asc']);
        let mapped_states = _.keyBy(states, 'country_id'); 
        dispatch({ type: 'FETCH_STATES',  states, mapped_states });  
    }
}


export const fetchCities = async (dispatch, id) => {
    const query = await firestore.collection('cities').where('state_id','==', id).get();
    let cities = [];
    if(!query.empty){
      query.docs.map((snapshot)=> cities.push(snapshot.data()));
      cities = _.orderBy(cities, ['name'],['asc']);
      let mapped_cities = _.keyBy(cities, 'state_id'); 
      dispatch({ type: 'FETCH_CITIES', cities, mapped_cities });  
     }
  }



