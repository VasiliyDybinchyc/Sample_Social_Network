import axios from 'axios';
import store from '../store';

import { browserHistory }   from 'react-router';

import { createSessionSuccess } from '../actions/sessions-actions';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

import  { newError,
          resetError } from '../actions/global-action';

import { getUsersSuccess,
         getProfileSuccess } from '../actions/user-actions';


export function getUsers() {
  return axios.get('/users')
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

export function editUser(editedUser , userId) {
  return axios.patch('/users/' + userId, editedUser, CONFIG_MULTIPART_FORM_DATA)
    .then(
      fulfilled => {
        store.dispatch(createSessionSuccess(fulfilled.data))
        store.dispatch(resetError())
        browserHistory.push('/profile')
      },
      rejected => {
        store.dispatch(newError(rejected.data.errors.full_messages))
      });
}

export function getProfile(userId) {
  return axios.get('/giveUser/' + userId)
    .then(response => {
      store.dispatch(getProfileSuccess(response.data));
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
