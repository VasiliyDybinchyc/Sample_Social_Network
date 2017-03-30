import axios from 'axios';
import store from '../store';
import { getGallereySuccess, postGallereySuccess } from '../actions/actions-gallerey';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

export function postGallerey(userId, gallerey) {
  return axios.post('/users/' + userId + '/galleries', gallerey, CONFIG_MULTIPART_FORM_DATA)
    .then(gallerey => {
      store.dispatch(postGallereySuccess(gallerey));
      return gallerey;
    });
}

export function getGallerey(userId) {
  return axios.get('/users/' + userId + '/galleries')
    .then(response => {
      store.dispatch(getGallereySuccess(response.data));
      return response;
    });
};
