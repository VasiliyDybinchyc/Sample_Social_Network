import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  users: [],
  userProfile: undefined,
  authentication: undefined,
  currentUser: [],
  error: undefined
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.CREATE_USER_SUCCESS:
      return Object.assign({}, state, { currentUser: action.createdUser });

    case types.CREATE_USER_ERROR:
      return Object.assign({}, state, { error: action.error });

    case types.EDIT_USER_SUCCESS:
      return Object.assign({}, state, { currentUser: action.editedUser });

    case types.EDIT_USER_ERROR:
      return Object.assign({}, state, { error: action.error });

    case types.GET_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

    case types.AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, { authentication: action.authentication });

    case types.GET_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, { currentUser: action.currentUser });

    case types.RESET_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser });

    }

  return state;

}

export default userReducer;
