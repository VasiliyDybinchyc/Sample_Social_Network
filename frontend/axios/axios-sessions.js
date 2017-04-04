import axios from 'axios';
import store from '../store';
import { browserHistory } from 'react-router';
import { deleteSessionSuccess,
         createSessionSuccess} from '../actions/sessions-actions';

import { checkError }     from '../helper/logic';

export function createSession(User) {
  return axios.post('/sessions', {user: User})
    .then(response => {
      checkError(response.data, createSessionSuccess)
      return response;
    });
}

export function deleteSession(userId) {
  return axios.delete('/sessions/' + userId)
    .then(response => {
      store.dispatch(deleteSessionSuccess());
      browserHistory.push('/');
      return response;
    });
}
