import * as types from '../actions/action-types';
import { getCurrentUser } from '../axios/axios-user'

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
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
