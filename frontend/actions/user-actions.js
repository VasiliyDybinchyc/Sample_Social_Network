import * as types from '../actions/action-types';
import { getCurrentUser } from '../axios/axios-user'

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function createUserSuccess(createdUser) {
  return {
    type: types.CREATE_USER_SUCCESS,
    createdUser
  };
}

export function createUserError(error) {
  return {
    type: types.CREATE_USER_ERROR,
    error
  };
}

export function editUserSuccess(editedUser) {
  return {
    type: types.EDIT_USER_SUCCESS,
    editedUser
  };
}

export function editUserError(error) {
  return {
    type: types.EDIT_USER_ERROR,
    error
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

export function resetErrorProps() {
  return {
    type: types.EDIT_USER_ERROR,
    undefined
  };
}

export function resetProfileProps() {
  return {
    type: types.GET_PROFILE_SUCCESS,
    undefined
  }
}
