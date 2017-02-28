import axios from 'axios';
import store from '../store';
import { postNewsSuccess, getNewsSuccess, getOnlyUserNewsSuccess } from '../actions/news-actions';

const config = { headers: { 'Content-Type': 'multipart/form-data' } };

export function postNews(userId, news) {
  return axios.post('http://localhost:3000/users/' + userId + '/messages', news, config)
    .then(response => {
      store.dispatch(postNewsSuccess(response.data));
      return response;
    });
}

export function getNews(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/messages')
    .then(response => {
      store.dispatch(getNewsSuccess(response.data));
      return response;
    });
}

export function getOnlyUserNews(userId) {
  return axios.get('http://localhost:3000/users/'+ userId +'/get_only_user_message')
    .then(response => {
      store.dispatch(getOnlyUserNewsSuccess(response.data));
      return response;
    });
}
