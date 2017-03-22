import axios from 'axios';
import store from '../store';

import  { browserHistory }   from 'react-router';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

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
      if (Array.isArray(response.data)) {
        store.dispatch(createUserError(response.data));
        return response;
      }else {
        store.dispatch(createUserSuccess(response.data));
        return response;
      }
    });
}

export function editUser(editedUser , userId) {
  return axios.patch('/users/' + userId, editedUser, CONFIG_MULTIPART_FORM_DATA)
    .then(response => {
      console.log(response.data)
      if (Array.isArray(response.data)) {
        store.dispatch(editUserError(response.data));
        return response;
      }else {
        store.dispatch(editUserSuccess(response.data));
        return response;
      }
    });
}

export function getProfile(userId) {
  return axios.get('/users/' + userId)
    .then(response => {
      store.dispatch(getProfileSuccess(response.data));
      return response;
    });
}

export function authentication(location) {
  return axios.get('/users/authentication')
    .then(response => {
      store.dispatch(authenticationSuccess(response.data));
      if (response.data == true) {
        return axios.get('/users/getCurrentUser')
          .then(response => {
            store.dispatch(getCurrentUserSuccess(response.data))
            if (location == '/login' || location == '/signup') {
              browserHistory.push('/profile')
            }
            return response;
          })
      }
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
