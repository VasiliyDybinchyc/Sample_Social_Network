import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  sessions: [],
  render: false,
  openModal: false
};

const sessionReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.CREATE_SESSION_SUCCESS:
      return Object.assign({}, state, { sessions: action.session });

    case types.DELETE_SESSION_SUCCESS:
      return Object.assign({}, state, { sessions: action.session });

    case types.CHANGE_OPEN_MODAL:
      return Object.assign({}, state, { openModal: action.openModal });

    }

  return state;

}

export default sessionReducer;
