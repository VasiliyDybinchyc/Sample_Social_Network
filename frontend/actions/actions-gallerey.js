import * as types from '../actions/action-types';

export function getGallereySuccess(gallerey) {
  return {
    type: types.GET_GALLEREY_SUCCESS,
    gallerey
  };
}
