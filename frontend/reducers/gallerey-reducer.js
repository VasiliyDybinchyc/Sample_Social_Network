import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  gallerey: [null],
  allAmount: [null]
};

const gallereyReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_GALLEREY_SUCCESS:
      return Object.assign({}, state, { gallerey: action.gallerey });

    case types.GET_ALL_GALLEREY_AMOUNT:
      return Object.assign({}, state, { allAmount: action.amount });

    case types.RESET_ALL_GALLEREY_AMOUNT:
    console.log('==============================================================')
    console.log(action.amount)
      return Object.assign({}, state, { allAmount: action.amount });

    case types.POST_GALLEREY_SUCCESS:
      return Object.assign({}, state, { gallerey: action.postGallerey.concat(state.gallerey) });
  }

  return state;

}

export default gallereyReducer;
