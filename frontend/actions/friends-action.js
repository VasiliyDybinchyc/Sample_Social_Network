import * as types from '../actions/action-types';

export function getFriendsSuccess(userFriends) {
  return {
    type: types.GET_FRIEND_SUCCESS,
    userFriends
  };
};

export function resetFriendProps() {
  return {
    type: types.RESET_FRIEND_SUCCESS,
    reset: [null]
  }
}

export function getAllFriendsSuccess(allUserFriends) {
  return {
    type: types.GET_ALL_FRIEND_SUCCESS,
    allUserFriends
  };
};

export function resetAllFriendsSuccess(allUserFriends) {
  return {
    type: types.RESET_ALL_FRIEND_SUCCESS,
    reset: [null]
  };
};

export function checkIsThisUserIsFriendSuccess(checkIsThisUserIsFriend) {
  return {
    type: types.CHECK_IS_THIS_USER_IS_FRIEND_SUCCESS,
    checkIsThisUserIsFriend
  };
};
