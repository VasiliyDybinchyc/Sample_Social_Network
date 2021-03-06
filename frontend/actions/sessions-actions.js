import * as types from '../actions/action-types';

export function createSessionSuccess(session) {
  return {
    type: types.CREATE_SESSION_SUCCESS,
    session
  };
}

export function deleteSessionSuccess() {
  return {
    type: types.DELETE_SESSION_SUCCESS,
    reset: false
  };
}
