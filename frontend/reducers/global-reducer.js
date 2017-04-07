import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  render: [null],
  error:  [null]
};

const globalReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.NEW_ERROR:
      return Object.assign({}, state, { error: action.error });

    case types.RESET_ERROR:
      return Object.assign({}, state, { error: action.reset });

    }

  return state;

}

export default globalReducer;
