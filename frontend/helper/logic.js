import    * as axiosUser          from '../axios/axios-user';
import    * as actionUser         from '../actions/user-actions';

import store from '../store'

export function auth() {
  return axiosUser.authentication().then(result => {
    if(result.data == true) {
       store.dispatch(actionUser.authenticationSuccess(true))
       return axiosUser.getCurrentUser()
    }else{
      return store.dispatch(actionUser.authenticationSuccess(false))
    }
  })
}

export function checkError(result, action) {
  if (Array.isArray(result)) {
    return store.dispatch(actionUser.createUserError(result))
  }else {
    store.dispatch(actionUser.resetErrorProps())
    return store.dispatch(action(result));
  }
}