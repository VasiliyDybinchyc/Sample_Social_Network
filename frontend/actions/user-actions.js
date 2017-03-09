import * as types from '../actions/action-types';

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function createUserSuccess(user) {
  return {
    type: types.CREATE_USER_SUCCESS,
    user
  };
}

export function createUserError(error) {
  return {
    type: types.CREATE_USER_ERROR,
    error
  };
}

export function editUserSuccess(user) {
  return {
    type: types.EDIT_USER_SUCCESS,
    user
  };
}

export function getProfileSuccess(userProfile) {
  return {
    type: types.GET_PROFILE_SUCCESS,
    userProfile
  };
}

export function authenticationSuccess(authentication) {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    authentication
  };
}

export function getCurrentUserSuccess(currentUser) {
  return {
    type: types.GET_CURRENT_USER_SUCCESS,
    currentUser
  };
}
