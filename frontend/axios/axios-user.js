import axios from 'axios';
import store from '../store';

import  { browserHistory }   from 'react-router';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

import { checkError }     from '../helper/logic';

import { getUsersSuccess,
         createUserSuccess,
         createUserError,
         editUserSuccess,
         editUserError,
         getProfileSuccess,
         authenticationSuccess,
         getCurrentUserSuccess } from '../actions/user-actions';


export function getUsers() {
  return axios.get('/users')
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

export function createUser(createdUser) {
  return axios.post('/users', {user: createdUser})
    .then(response => {
      checkError(response.data, createUserSuccess)
    });
}

export function editUser(editedUser , userId) {
  return axios.patch('/users/' + userId, editedUser, CONFIG_MULTIPART_FORM_DATA)
    .then(response => {
      checkError(response.data, editUserSuccess)
    });
}

export function getProfile(userId) {
  return axios.get('/giveUser/' + userId)
    .then(response => {
      store.dispatch(getProfileSuccess(response.data));
      return response;
    });
}

export function authentication() {
  return axios.get('/users/authentication')
    .then(response => {
      store.dispatch(authenticationSuccess(response.data));
      return response;
    });
}

export function getCurrentUser() {
  return axios.get('/users/getCurrentUser')
    .then(response => {
      store.dispatch(getCurrentUserSuccess(response.data));
      return response;
    });
}
