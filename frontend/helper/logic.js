import    * as axiosUser          from '../axios/axios-user';
import    * as actionUser         from '../actions/user-actions';
import * as globalActions from '../actions/global-action';
import { browserHistory } from 'react-router';

import store from '../store'

export function auth(redirect) {
  return axiosUser.authentication().then(result => {

    if(result.data == true && store.getState().userState.currentUser.id !== undefined) {
      store.dispatch(actionUser.authenticationSuccess(true))
      redirect && browserHistory.push('/profile')
    }
    else if (result.data == true){
      store.dispatch(actionUser.authenticationSuccess(true))
      return axiosUser.getCurrentUser().then( () => {
        redirect && browserHistory.push('/profile')
      })
    }
    else{
      return store.dispatch(actionUser.authenticationSuccess(false))
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
