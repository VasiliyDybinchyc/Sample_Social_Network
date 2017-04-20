import axios from 'axios';
import store from '../store';

import { popAllAmount }     from '../helper/helperFrontend'

import { CONFIG_MULTIPART_FORM_DATA }     from '../helper/helperAxios';

import { getGallereySuccess, postGallereySuccess } from '../actions/actions-gallerey';


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
