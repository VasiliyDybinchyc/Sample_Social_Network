import axios from 'axios';
import store from '../store';
import { postNewsSuccess, getNewsSuccess, getOnlyUserNewsSuccess, getMoreNewsSuccess } from '../actions/news-actions';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

export function postNews(userId, dataForServer) {
  return axios.post('/users/' + userId + '/messages', dataForServer, CONFIG_MULTIPART_FORM_DATA)
    .then(response => {
      store.dispatch(postNewsSuccess([response.data]));
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

export function getMoreNews(userId) {
  return axios.get('/users/' + userId + '/messages/takeMoreNews')
    .then(response => {
      store.dispatch(getMoreNewsSuccess(response.data));
      return response;
    });
}
