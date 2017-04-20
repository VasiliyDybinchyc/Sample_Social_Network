import store                    from '../store';

import * as userActions         from '../actions/user-actions';
import * as globalActions       from '../actions/global-action';
import * as friendActions       from '../actions/friends-action';
import * as actionSession       from '../actions/sessions-actions';
import * as newsActions         from '../actions/news-actions';
import * as gallereyActions     from '../actions/actions-gallerey';

import { changeOpenModal }      from '../actions/sessions-actions';

import { getGallereySuccess,
         getAllGallereyAmount } from '../actions/actions-gallerey';


// react filtered empty line like this "  " but not filtered "\u200b" <-- this is empty symbol i put instead of spaces
export var fourSpaces = '\u200b \u200b \u200b \u200b';

// this function check heve got response form server to all props
export function checkReadyToRender() {
  var ok = 0
  for (var i = 0; i < arguments.length; i++) {

    if (Array.isArray(arguments[i])) {

      if(arguments[i][0] !== null){
        ok +=1

        if (ok == arguments.length) {
          return true
        }

        continue
      }

    }else {

      if (arguments[i] !== undefined){
        ok +=1
        if (ok == arguments.length) {
          return true
        }

        continue
      }
    }
  }
};

// this function reset error props in userReducer in order to don`t see error from previous page
export function resetError() {
  store.dispatch(globalActions.resetError());
};

export function resetCurrentUser() {
  store.dispatch(actionSession.deleteSessionSuccess());
};

export function resetGallereyInfo() {
  store.dispatch(gallereyActions.resetGallereyProps())
  store.dispatch(gallereyActions.resetGallereyAmountProps())
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

export function popAllAmount(galerey) {
  let allAmount = galerey.pop()
  store.dispatch(gallereyActions.getAllGallereyAmount(allAmount))
  store.dispatch(gallereyActions.getGallereySuccess(galerey))
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
