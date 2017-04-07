import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  users: [null],
  userProfile: undefined,
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.GET_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

    case types.RESET_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.reset });

    }

  return state;

}

export default userReducer;
