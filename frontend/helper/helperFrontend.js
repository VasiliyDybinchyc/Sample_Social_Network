import store from '../store';
import { resetErrorProps } from '../actions/user-actions';

// react filtered empty line like this "  " but not filtered "\u200b" <-- this is empty symbol i put instead of spaces
export var fourSpaces = '\u200b \u200b \u200b \u200b';

// this function check heve got response form server to all props
export function checkReadyToRender() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] !== undefined) {
      if (i == arguments.length - 1) {
        return true
      }
      continue
    }else {
      return false
    }
  }
};

// this function reset error props in userReducer in order to don`t see error from previous page
export function resetError() {
  store.dispatch(resetErrorProps());
}

export function checkIsNotThisMyProfile(curentID, profileID) {
  if (curentID == profileID) {
    return true
  }
}
