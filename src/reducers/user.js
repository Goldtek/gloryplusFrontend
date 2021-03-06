import {
     LOG_OUT, LOGIN_SUCCESS, 
     STORE_USER_ERROR_MSG, 
     FETCH_COUNTRIES, 
     FETCH_CITIES, 
     FETCH_STATES, 
     FETCH_MAPPED_STATES, 
     FETCH_MAPPED_CITIES
  } from '../actions/action-type';
  
  const initialState = {
    user: {},
    errorMessage: '',
    isAuthenticated: false,
    states: [],
    cities: [],
    countries: [],
    mapped_states: [],
    mapped_cities: [],
    mapped_countries: [],
  };
  
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {

      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.response.user,
          token: action.response.token,
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

        case FETCH_MAPPED_CITIES:
          return {
            ...state,
            mapped_cities: action.mapped_cities,
          };

      case FETCH_CITIES:
        return {
          ...state,
          cities: action.cities,
        };
        
      case LOG_OUT:
        return {
          ...initialState,
        };
  
      default:
        return state;
    }
  };
  
  
  export default UserReducer;
  