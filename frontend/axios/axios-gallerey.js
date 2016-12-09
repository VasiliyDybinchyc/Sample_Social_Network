import axios from 'axios';
import store from '../store';
import { getGallereySuccess } from '../actions/actions-gallerey';

export function getGallerey(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/galleries')
    .then(response => {
      store.dispatch(getGallereySuccess(response.data));
      return response;
    });
};
