import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  users: [],
  userProfile: [],
  authentication: undefined,
  currentUser: []
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.CREATE_USER_SUCCESS:
      return Object.assign({}, state, { user: action.user });

    case types.EDIT_USER_SUCCESS:
      return Object.assign({}, state, { user: action.user });

    case types.GET_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

    case types.AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, { authentication: action.authentication });

    case types.GET_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, { currentUser: action.currentUser });

    }

  return state;

}

export default userReducer;
