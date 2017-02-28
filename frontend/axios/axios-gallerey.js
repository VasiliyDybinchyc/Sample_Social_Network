import axios from 'axios';
import store from '../store';
import { getGallereySuccess, postGallereySuccess } from '../actions/actions-gallerey';

import { CONFIG_MULTIPART_FORM_DATA }     from '../../helper/helperAxios';

export function postGallerey(userId, gallerey) {
  return axios.post('http://localhost:3000/users/' + userId + '/galleries', gallerey, CONFIG_MULTIPART_FORM_DATA)
    .then(response => {
      store.dispatch(postGallereySuccess(response.data));
      return response;
    });
}

export function getGallerey(userId) {
  return axios.get('http://localhost:3000/users/' + userId + '/galleries')
    .then(response => {
      store.dispatch(getGallereySuccess(response.data));
      return response;
    });
};
