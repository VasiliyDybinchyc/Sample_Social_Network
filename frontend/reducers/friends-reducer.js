import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  userFriends: undefined,
  checkIsThisUserIsFriend: [],
  allUserFriends: []
};

const friendsReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_FRIEND_SUCCESS:
      return Object.assign({}, state, { userFriends: action.userFriends });

    case types.RESET_FRIEND_SUCCESS:
      return Object.assign({}, state, { userFriends: action.reset });

    case types.GET_ALL_FRIEND_SUCCESS:
      return Object.assign({}, state, { allUserFriends: action.allUserFriends });

    case types.RESET_ALL_FRIEND_SUCCESS:
      return Object.assign({}, state, { allUserFriends: action.reset });

    case types.CHECK_IS_THIS_USER_IS_FRIEND_SUCCESS:
      return Object.assign({}, state, { checkIsThisUserIsFriend: action.checkIsThisUserIsFriend });
  }

  return state;

}

export default friendsReducer;
