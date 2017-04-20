import axios from 'axios';
import store from '../store';

import { getFriendsSuccess,
         getAllFriendsSuccess,
         checkIsThisUserIsFriendSuccess } from '../actions/friends-action';


export function newFriend(friendId) {
  return axios.post('/relationships', {friendId : friendId})
};

export function deleteFriend(friendId) {
  return axios.delete('/relationships/' + friendId)
};

export function getFriends(userId) {
  return axios.get('/relationships/' + userId + '/get_friends')
    .then(response => {
      store.dispatch(getFriendsSuccess(response.data));
      return response;
    });
};

export function getAllFriends(userId) {
  return axios.get('/relationships/' + userId + '/get_all_friends')
    .then(response => {
      store.dispatch(getAllFriendsSuccess(response.data));
      return response;
    });
};

export function checkIsThisUserIsFriend(userId) {
  return axios.get('/relationships/' + userId + '/check_is_this_user_is_friend')
    .then(response => {
      store.dispatch(checkIsThisUserIsFriendSuccess(response.data));
      return response;
    });
};
