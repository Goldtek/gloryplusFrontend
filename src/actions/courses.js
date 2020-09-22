import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { LOGIN_SUCCESS, STORE_COURSE_ERROR_MSG } from './action-type';

const apiUrl = process.env.REACT_APP_BASE_URL;


export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });

export const errorMessage = (message) => ({ type: STORE_COURSE_ERROR_MSG, message });

export const schedule = (data) => async (dispatch) => {
  const history = useHistory();
  try {
    await axios.post(`${apiUrl}/schedule`, data);

  } catch (error) {
    dispatch(errorMessage(error.message));
  }
};
