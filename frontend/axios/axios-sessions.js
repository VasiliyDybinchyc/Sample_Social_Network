import axios from 'axios';
import store from '../store';
import { browserHistory } from 'react-router';
import { deleteSessionSuccess,
         createSessionSuccess} from '../actions/sessions-actions';

export function createSession(User) {
  return axios.post('http://localhost:3000/sessions', {user: User})
    .then(response => {
      store.dispatch(createSessionSuccess(response.data));
      return response;
    });
}

export function deleteSession(userId) {
  return axios.delete('http://localhost:3000/sessions/' + userId)
    .then(response => {
      store.dispatch(deleteSessionSuccess(response.data));
      browserHistory.push('/');
      return response;
    });
}
