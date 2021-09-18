import axios from 'axios';
import { LOGIN_SUCCESS, STORE_USER_ERROR_MSG } from './action-type';

const apiUrl = process.env.REACT_APP_BASE_URL;


export const loginSuccess = (response) => ({ type: LOGIN_SUCCESS, response });

export const errorMessage = (message) => ({ type: STORE_USER_ERROR_MSG, message });

export const login = (response) => async (dispatch) => {
    dispatch(loginSuccess(response)); 
};

export const register = (data) => async (dispatch) => {
  try {
    await axios.post(`${apiUrl}/register`, data);
    login(data);
  } catch (error) {
    dispatch(errorMessage(error.message));
  }
};

