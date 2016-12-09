import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  userFriends: [],
  checkIsThisUserIsFriend: [],
  allUserFriends: []
};

const friendsReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.NEW_FRIEND_SUCCESS:
      return Object.assign({}, state, { friends: action.friends });

    case types.DELETE_FRIEND_SUCCESS:
      return Object.assign({}, state, { friends: action.friends });

    case types.GET_FRIEND_SUCCESS:
      return Object.assign({}, state, { userFriends: action.userFriends });

    case types.GET_ALL_FRIEND_SUCCESS:
      return Object.assign({}, state, { allUserFriends: action.allUserFriends });

    case types.CHECK_IS_THIS_USER_IS_FRIEND_SUCCESS:
      return Object.assign({}, state, { checkIsThisUserIsFriend: action.checkIsThisUserIsFriend });
  }

  return state;

}

export default friendsReducer;
