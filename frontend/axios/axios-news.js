import axios from 'axios';
import store from '../store';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

import { postGallereySuccess } from '../actions/actions-gallerey';

import { postNewsSuccess,
         getNewsSuccess,
         getNewsFriendsSuccess,
         getMoreNewsSuccess } from '../actions/news-actions';


export function postNews(userId, news) {
  return axios.post('/users/' + userId + '/messages', news, CONFIG_MULTIPART_FORM_DATA)
    .then(response => {
      store.dispatch(postNewsSuccess([response.data]));

      if (response.data.picture.url !== null) {
        store.dispatch(postGallereySuccess([response.data]))
      }

      return response;
    });
}

export function getNews(userId) {
  return axios.get('/users/' + userId + '/messages')
    .then(response => {
      store.dispatch(getNewsSuccess(response.data));
      return response;
    });
}

export function getNewsFriends(userId) {
  return axios.get('/users/' + userId + '/messages/getFeedFriends')
    .then(response => {
      store.dispatch(getNewsFriendsSuccess(response.data));
      return response;
    });
}

export function getMoreNews(userId) {
  return axios.get('/users/' + userId + '/messages/takeMoreNews')
    .then(response => {
      store.dispatch(getMoreNewsSuccess(response.data));
      return response;
    });
}
