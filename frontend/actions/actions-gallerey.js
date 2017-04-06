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

export function getAllGallereyAmount(amount) {
  return {
    type: types.GET_ALL_GALLEREY_AMOUNT,
    amount
  };
}

export function resetGallereyProps() {
  return {
    type: types.GET_GALLEREY_SUCCESS,
    gallerey: [null]
  }
}

export function resetGallereyAmountProps() {
  return {
    type: types.RESET_ALL_GALLEREY_AMOUNT,
    amount: [null]
  }
}
