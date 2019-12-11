import axios from 'axios';


import {
  GET_USER,
  GET_USERS,
  USER_ERROR,
  CLEAR_USER,
  ACCOUNT_DELETED
} from './types';

// Get current users profile
export const getCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get('https://confessionapi.herokuapp.com/user/me');

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all users
export const getUsers = () => async dispatch => {
  dispatch({ type: CLEAR_USER });

  try {
    const res = await axios.get('https://confessionapi.herokuapp.com/user/');

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get profile by ID
export const getUserById = userId => async dispatch => {
  try {
    const res = await axios.get(`https://confessionapi.herokuapp.com/user/${userId}`);

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Delete account
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete(`https://confessionapi.herokuapp.com/user/${userId}`);

      dispatch({ type: CLEAR_USER });
      dispatch({ type: ACCOUNT_DELETED });

    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
