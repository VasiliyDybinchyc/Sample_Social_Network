import axios from 'axios';
import store from '../store';

import { browserHistory } from 'react-router';

import { getUsersSuccess,
         createUserSuccess,
         editUserSuccess,
         getProfileSuccess,
         authenticationSuccess,
         getCurrentUserSuccess } from '../actions/user-actions';


export function getUsers() {
  return axios.get('http://localhost:3000/users')
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}

export function createUser(createdUser) {
  return axios.post('http://localhost:3000/users', {user: createdUser})
    .then(response => {
      store.dispatch(createUserSuccess(response.data));
      return response;
    });
}

export function editUser(editedUser , userId) {
  return axios.patch('http://localhost:3000/users/' + userId, {user: editedUser})
    .then(response => {
      store.dispatch(editUserSuccess(response.data));
      return response;
    });
}

export function getProfile(userId) {
  return axios.get('http://localhost:3000/users/' + userId)
    .then(response => {
      store.dispatch(getProfileSuccess(response.data));
      return response;
    });
}

export function authentication() {
  return axios.get('http://localhost:3000/users/authentication')
    .then(response => {
      store.dispatch(authenticationSuccess(response.data));
      if (response.data == true) {
        return axios.get('http://localhost:3000/users/getCurrentUser')
          .then(response => {
            store.dispatch(getCurrentUserSuccess(response.data))
            return response;
          }).then(function () {
            browserHistory.push('/profile')
          });
      }
      return response;
    });
}

export function getCurrentUser() {
  return axios.get('http://localhost:3000/users/getCurrentUser')
    .then(response => {
      store.dispatch(getCurrentUserSuccess(response.data));
      return response;
    });
}
