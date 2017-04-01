import store from '../store';
import * as userActions from '../actions/user-actions';
import { changeOpenModal } from '../actions/sessions-actions';

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

export function resetNewsGalereyFriendProfile() {
  store.dispatch(userActions.resetProfileProps());
  store.dispatch(userActions.resetFriendProps());
  store.dispatch(userActions.resetNewsProps());
  store.dispatch(userActions.resetGallereyProps());
};

export function checkIsNotThisMyProfile(curentID, profileID) {
  if (curentID == profileID) {
    return true
  }
};

export function checkIfYourOnBottomPage() {
  const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  const body = document.body;
  const html = document.documentElement;
  const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
  const windowBottom = windowHeight + window.pageYOffset;

  if (windowBottom >= docHeight - 500) {
    return true
  }
};
