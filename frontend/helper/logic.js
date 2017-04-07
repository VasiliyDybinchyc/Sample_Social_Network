import    * as axiosUser          from '../axios/axios-user';
import    * as actionUser         from '../actions/user-actions';
import    * as actionSession         from '../actions/sessions-actions';
import * as globalActions from '../actions/global-action';
import { browserHistory } from 'react-router';

import store from '../store'

export function auth(redirect) {
  return axiosUser.authentication().then(response => {
    if(response.data !== undefined && store.getState().sessionState.sessions.id !== undefined) {
      store.dispatch(actionSession.createSessionSuccess(response.data))
      redirect && browserHistory.push('/profile')
    }
    else if (response.data !== undefined){
      store.dispatch(actionSession.createSessionSuccess(response.data))
      redirect && browserHistory.push('/profile')
    }
    else{
      return store.dispatch(actionSession.createSessionSuccess(false))
    }
  })
}


export function checkError(result, action) {
  if (Array.isArray(result)) {
    return store.dispatch(globalActions.newError(result))
  }else {
    store.dispatch(globalActions.resetError())
    return store.dispatch(action(result));
  }
}
