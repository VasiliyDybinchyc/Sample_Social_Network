import axios from 'axios';
import store from '../store';

import  { browserHistory }   from 'react-router';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

import { checkError }     from '../helper/logic';

import { getUsersSuccess,
         getProfileSuccess } from '../actions/user-actions';

import {createSessionSuccess} from '../actions/sessions-actions';


export function getUsers() {
  return axios.get('/users')
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

export function createUser(createdUser) {
  return axios.post('/users', createdUser)
    .then(response => {
      checkError(response.data, createSessionSuccess)
    });
}

export function editUser(editedUser , userId) {
  return axios.patch('/users/' + userId, editedUser, CONFIG_MULTIPART_FORM_DATA)
    .then(response => {
      checkError(response.data, createSessionSuccess)
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
      return response;
    });
}

export function getCurrentUser() {
  return axios.get('/users/getCurrentUser')
    .then(response => {
      store.dispatch(createSessionSuccess(response.data));
      return response;
    });
}
