
import _ from 'lodash';
import {
     LOG_OUT, LOGIN_SUCCESS, 
     STORE_USER_ERROR_MSG, 
     FETCH_COUNTRIES, 
     FETCH_CITIES, 
     FETCH_STATES, 
     FETCH_MAPPED_STATES, 
     UNREGISTERED_USER,
     UPDATE_SUBSCRIPTION,
     UPDATE_COUNT
  } from '../actions/action-type';
  
  const initialState = {
    unregistered_user: {
      name: "",
      email: "",
      phone: ""
    },
    isset: false,
    user: {},
    errorMessage: '',
    isAuthenticated: false,
    states: [],
    cities: [],
    countries: [],
    count: 0
  };
  
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {

      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.user,
        };

      case STORE_USER_ERROR_MSG:
        return {
          ...state,
          errorMessage: action.message,
        };

      case FETCH_COUNTRIES:
      
        return {
          ...state,
          countries: [...action.countries],
        };

      case FETCH_STATES:
        return {
          ...state,
          states: action.states,
        };

      case FETCH_MAPPED_STATES:
        return {
          ...state,
          mapped_states: action.mapped_states,
        };

        case FETCH_CITIES:
          return {
            ...state,
            cities: action.cities,
          };

      case UNREGISTERED_USER:
        return {
          ...state,
          unregistered_user: action.user,
          isset: true
        };

      case UPDATE_COUNT:
        console.log('count', state.count)
      return {
        ...state,
        count: 1,
      };


      case UPDATE_SUBSCRIPTION:

        return {
          ...state,
          user: action.user
        }
        
      case LOG_OUT:
        return {
          ...initialState,
        };
  
      default:
        return state;
    }
  };
  
  
  export default UserReducer;
  