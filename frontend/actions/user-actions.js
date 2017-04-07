import * as types from '../actions/action-types';
import { getCurrentUser } from '../axios/axios-user'

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function newCurrentUser(currentUser) {
  return {
    type: types.NEW_CURRENT_USER,
    currentUser
  };
}

export function getProfileSuccess(userProfile) {
  return {
    type: types.GET_PROFILE_SUCCESS,
    userProfile
  };
}

export function resetProfileProps() {
  return {
    type: types.RESET_PROFILE_SUCCESS,
    reset: [null]
  }
}

export function authenticationSuccess(authentication) {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    authentication
  };
}

export function resetCurrentUser() {
  return {
    type: types.RESET_CURRENT_USER,
    reset: [null]
  }
}
