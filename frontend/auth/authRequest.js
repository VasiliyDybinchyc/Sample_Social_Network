import store from '../store';

import { browserHistory } from 'react-router';

import { deleteSessionSuccess,
         createSessionSuccess} from '../actions/sessions-actions';

import { newError,
         resetError } from '../actions/global-action';

import Auth from 'j-toker';

export function createSession(User) {
  return Auth.emailSignIn(User)
    .then(
      response => {
        store.dispatch(createSessionSuccess(response.data))
        store.dispatch(resetError())
        browserHistory.push('/profile')
      },
      response => {
        store.dispatch(newError(response.data.errors))
      }
    )
}

export function createUser(createdUser) {
  return Auth.emailSignUp({user: createdUser})
    .then(
      response => {
        store.dispatch(createSessionSuccess(response.data))
        store.dispatch(resetError())
        browserHistory.push('/profile')
      },
      response => {
        store.dispatch(newError(response.data.errors.full_messages))
      });
}


Auth.configure({
  apiUrl:                'http://localhost:3000',
  signOutPath:           '/auth/sign_out',
  emailSignInPath:       '/auth/sign_in',
  emailRegistrationPath: '/auth',
  accountUpdatePath:     '/auth',
  accountDeletePath:     '/auth',
  passwordResetPath:     '/auth/password',
  passwordUpdatePath:    '/auth/password',
  tokenValidationPath:   '/auth/validate_token',
  proxyIf:               function() { return false; },
  proxyUrl:              '/proxy',
  validateOnPageLoad:    false,
  forceHardRedirect:     false,
  storage:               'cookies',
  cookieExpiry:          14,
  cookiePath:            '/',

  passwordResetSuccessUrl: function() {
    return window.location.href;
  },

  confirmationSuccessUrl:  function() {
    return window.location.href;
  },

  tokenFormat: {
    "access-token": "{{ access-token }}",
    "token-type":   "Bearer",
    client:         "{{ client }}",
    expiry:         "{{ expiry }}",
    uid:            "{{ uid }}"
  },

  parseExpiry: function(headers){
    // convert from ruby time (seconds) to js time (millis)
    return (parseInt(headers['expiry'], 10) * 1000) || null;
  },

  handleLoginResponse: function(resp) {
    return resp.data;
  },

  handleAccountUpdateResponse: function(resp) {
    return resp.data;
  },

  handleTokenValidationResponse: function(resp) {
    return resp.data;
  },

  authProviderPaths: {
    github:    '/auth/github',
    facebook:  '/auth/facebook',
    google:    '/auth/google_oauth2'
  }
});
