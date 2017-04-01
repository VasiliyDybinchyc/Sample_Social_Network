import * as types from '../actions/action-types';

export function newFriendSuccess(friends) {
  return {
    type: types.NEW_FRIEND_SUCCESS,
    friends
  };
};

export function deleteFriendSuccess() {
  return {
    type: types.DELETE_FRIEND_SUCCESS,
    undefined
  };
};

export function getFriendsSuccess(userFriends) {
  return {
    type: types.GET_FRIEND_SUCCESS,
    userFriends
  };
};

export function getAllFriendsSuccess(allUserFriends) {
  return {
    type: types.GET_ALL_FRIEND_SUCCESS,
    allUserFriends
  };
};

export function checkIsThisUserIsFriendSuccess(checkIsThisUserIsFriend) {
  return {
    type: types.CHECK_IS_THIS_USER_IS_FRIEND_SUCCESS,
    checkIsThisUserIsFriend
  };
};

export function resetFriendProps() {
  return {
    type: types.GET_FRIEND_SUCCESS,
    undefined
  }
}
