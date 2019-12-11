import axios from 'axios'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_USER,
  LOGOUT
} from './types'

import setAuthToken from '../utils/setAuthToken'


// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('https://confessionapi.herokuapp.com/user/user')

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}


// Register User
export const register = ({ name, email, password }) =>
async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password })

  try {
    const res = await axios.post('https://confessionapi.herokuapp.com/user/signup', body, config)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())

  } catch (err) {
    const errors = err.response.data.errors

    dispatch({
      type: REGISTER_FAIL
    })
  }
}


// Login User
export const login = (email, password) =>
async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post('https://confessionapi.herokuapp.com/auth/login', body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())

  } catch (err) {
    const errors = err.response.data.errors


    dispatch({
      type: LOGIN_FAIL
    })
  }
}


// Logout / Clear Profile

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
  dispatch({ type: CLEAR_USER })
}
