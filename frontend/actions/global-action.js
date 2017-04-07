import * as types from '../actions/action-types';

export function newError(error) {
  return {
    type: types.NEW_ERROR,
    error
  };
}

export function resetError() {
  return {
    type: types.RESET_ERROR,
    reset: [null]
  };
}
