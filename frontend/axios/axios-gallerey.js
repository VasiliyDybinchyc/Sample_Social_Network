import axios from 'axios';
import store from '../store';
import { getGallereySuccess } from '../actions/actions-gallerey';

import { CONFIG_MULTIPART_FORM_DATA }     from '../../helper/helperAxios';

export function postGallerey(userId, gallerey) {
  return axios.post('http://localhost:3000/users/' + userId + '/messages', gallerey, CONFIG_MULTIPART_FORM_DATA)
    .then(response => {
      store.dispatch(postNewsSuccess(response.data));
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
