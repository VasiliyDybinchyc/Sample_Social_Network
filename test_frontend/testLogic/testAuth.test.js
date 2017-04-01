import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import { userOne } from '../fakeData/fakeResponse'

import userReducer from '../../frontend/reducers/user-reducer';

import { createStore } from 'redux';

import { auth } from '../../frontend/logic/logic'

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('Test logic', () => {

  let store, createdStore

  before( () => {
    store = initialStore;
  })

  it('If auth logic false',() => {
    expect(initialStore.getState().userState.authentication).to.equal(undefined);

    nock(host)
      .get('/users/authentication')
      .reply(200, false)

    nock(host)
      .get('/users/getCurrentUser')
      .reply(200, userOne)

    return auth().then(() => {
      expect(initialStore.getState().userState.authentication).to.equal(false);
      expect(initialStore.getState().userState.currentUser).to.empty
    })
  })

  it('If auth logic true',() => {
    expect(initialStore.getState().userState.authentication).to.equal(false);
    expect(initialStore.getState().userState.currentUser).to.empty

    nock(host)
      .get('/users/authentication')
      .reply(200, true)

    nock(host)
      .get('/users/getCurrentUser')
      .reply(200, userOne)

    return auth().then(() => {
      expect(initialStore.getState().userState.authentication).to.equal(true);
      expect(initialStore.getState().userState.currentUser.user.firstName).to.equal(userOne.user.firstName);
    })
  })
})
