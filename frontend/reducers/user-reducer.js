import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  users: [null],
  userProfile: undefined,
  authentication: undefined,
  currentUser: [null]
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.NEW_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser });

    case types.RESET_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.reset });

    case types.GET_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

    case types.RESET_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.reset });

    case types.AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, { authentication: action.authentication });

    }

  return state;

}

export default userReducer;
