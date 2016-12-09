import axios from 'axios';
import store from '../store';
import {newFriendSuccess,
        deleteFriendSuccess,
        getFriendsSuccess,
        checkIsThisUserIsFriendSuccess,
        getAllFriendsSuccess } from '../actions/friends-action';

export function newFriend(FriendId) {
  return axios.post('http://localhost:3000/relationships', {friendId : FriendId})
    .then(response => {
      store.dispatch(newFriendSuccess(response.data));
      return response;
    });
};

export function deleteFriend(FriendId) {
  return axios.delete('http://localhost:3000/relationships/' + FriendId)
    .then(response => {
      store.dispatch(deleteFriendSuccess(response.data));
      return response;
    });
};

export function getFriends(userId) {
  return axios.get('http://localhost:3000/relationships/' + userId + '/get_friends')
    .then(response => {
      store.dispatch(getFriendsSuccess(response.data));
      return response;
    });
};

export function getAllFriends(userId) {
  return axios.get('http://localhost:3000/relationships/' + userId + '/get_all_friends')
    .then(response => {
      store.dispatch(getAllFriendsSuccess(response.data));
      return response;
    });
};

export function checkIsThisUserIsFriend(userId) {
  return axios.get('http://localhost:3000/relationships/' + userId + '/check_is_this_user_is_friend')
    .then(response => {
      store.dispatch(checkIsThisUserIsFriendSuccess(response.data));
      return response;
    });
};
