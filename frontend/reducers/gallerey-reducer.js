import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  gallerey: undefined
};

const gallereyReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_GALLEREY_SUCCESS:
      return Object.assign({}, state, { gallerey: action.gallerey });

    case types.POST_GALLEREY_SUCCESS:
      return Object.assign({}, state, { lastPostGallerey: action.postGallerey });
  }

  return state;

}

export default gallereyReducer;
