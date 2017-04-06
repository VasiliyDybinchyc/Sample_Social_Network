import axios from 'axios';
import store from '../store';
import { getGallereySuccess, postGallereySuccess } from '../actions/actions-gallerey';

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';
import { popAllAmount }     from '../helper/helperFrontend'

export function postGallerey(userId, gallerey) {
  return axios.post('/users/' + userId + '/galleries', gallerey, CONFIG_MULTIPART_FORM_DATA)
    .then(response => {
      store.dispatch(postGallereySuccess([response.data]));
      return response;
    });
}

export function getGallerey(userId, pageNumber) {
  return axios.get('/getGallerey/' + userId + '/page/' + pageNumber)
    .then(response => {
      popAllAmount(response.data)
      return response;
    });
};
