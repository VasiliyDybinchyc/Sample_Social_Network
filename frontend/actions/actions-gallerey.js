import * as types from '../actions/action-types';

export function postGallereySuccess(postGallerey) {
  return {
    type: types.POST_GALLEREY_SUCCESS,
    postGallerey
  };
}

export function getGallereySuccess(gallerey) {
  return {
    type: types.GET_GALLEREY_SUCCESS,
    gallerey
  };
}

export function resetGallereyProps() {
  return {
    type: types.GET_GALLEREY_SUCCESS,
    undefined
  }
}
