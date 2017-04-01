import store from '../store';
import * as userActions from '../actions/user-actions';
import * as friendActions from '../actions/friends-action';
import * as newsActions from '../actions/news-actions';
import * as gallereyActions from '../actions/actions-gallerey';
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

export function resetCurrentUser() {
  store.dispatch(userActions.resetCurrentUser());
};

export function resetNewsGalereyFriendProfile() {
  store.dispatch(userActions.resetProfileProps());
  store.dispatch(friendActions.resetFriendProps());
  store.dispatch(newsActions.resetNewsProps());
  store.dispatch(gallereyActions.resetGallereyProps());
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
