import axios from 'axios';
import store from '../store';
import { postNewsSuccess, getNewsSuccess, getOnlyUserNewsSuccess, getMoreNewsSuccess } from '../actions/news-actions';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

export function postNews(userId, news) {
  return axios.post('/users/' + userId + '/messages', news, CONFIG_MULTIPART_FORM_DATA)
    .then(news => {
      store.dispatch(postNewsSuccess(news));
      return news;
    });
}

export function getNews(userId) {
  return axios.get('/users/' + userId + '/messages')
    .then(response => {
      store.dispatch(getNewsSuccess(response.data));
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

export function getOnlyUserNews(userId) {
  return axios.get('/users/'+ userId +'/get_only_user_message')
    .then(response => {
      store.dispatch(getOnlyUserNewsSuccess(response.data));
      return response;
    });
}
