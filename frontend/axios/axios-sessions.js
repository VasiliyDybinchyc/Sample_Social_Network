import axios from 'axios';
import store from '../store';
import { browserHistory } from 'react-router';
import { deleteSessionSuccess,
         createSessionSuccess} from '../actions/sessions-actions';

import { checkError }     from '../helper/logic';

export function createSession(User) {
  return axios.post('/users/sign_in', {user: User})
    .then(response => {
      checkError(response.data, createSessionSuccess)
      return response;
    });
}

export function deleteSession(userId) {
  return axios.get('/users/sign_out')
    .then(() => {
      store.dispatch(deleteSessionSuccess());
    });
}
