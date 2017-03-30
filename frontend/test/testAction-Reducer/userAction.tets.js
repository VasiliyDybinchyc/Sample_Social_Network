import store from '../../store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as userActions from '../../actions/user-actions';

import { fakeUser } from '../fakeData/fakeResponse'

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('Test action user', () => {

  it('test get', () => {
    store.dispatch(userActions.getCurrentUserSuccess(fakeUser))
    expect(store.getState().userState.currentUser).to.equal(fakeUser);
  })

  it('test auth', () => {
    store.dispatch(userActions.authenticationSuccess(true))

    nock(host)
      .get('/users/getCurrentUser')
      .reply(200, fakeUser)

    expect(store.getState().userState.authentication).to.equal(true);
    expect(store.getState().userState.currentUser).to.equal(fakeUser);
  })
})
