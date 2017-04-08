import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import { userOne, userTwo, manyError } from '../fakeData/fakeResponse'

import userReducer from '../../frontend/reducers/user-reducer';

import { createStore } from 'redux';

import { auth, checkError } from '../../frontend/helper/logic'

import * as axiosUser from '../../frontend/axios/axios-user';

import {createSessionSuccess} from '../../frontend/actions/sessions-actions';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('Test logic', () => {

  let store, createdStore

  before( () => {
    store = initialStore;
  })

  it('If auth logic',() => {
    expect(initialStore.getState().sessionState.sessions[0]).to.equal(null);

    nock(host)
      .get('/users/authentication')
      .reply(200, userOne)

    return auth().then(() => {
      expect(initialStore.getState().sessionState.sessions.user.firstName).to.equal(userOne.user.firstName)
    })
  })

  it('Test checkError helper set user',() => {
    expect(initialStore.getState().userState.error).to.equal(undefined);
    expect(initialStore.getState().sessionState.sessions.user.firstName).to.equal(userOne.user.firstName)

    checkError(userTwo, createSessionSuccess)

    expect(initialStore.getState().globalState.error).to.equal(undefined)
    expect(initialStore.getState().sessionState.sessions.user.firstName).to.equal(userTwo.user.firstName);
  })

  it('Test checkError helper set error',() => {
    expect(initialStore.getState().globalState.error).to.equal(undefined)

    checkError(manyError, "action")

    expect(initialStore.getState().globalState.error).to.equal(manyError)
  })

  it('Test checkError helper reset error',() => {
    expect(initialStore.getState().globalState.error).to.equal(manyError)

    checkError(userTwo, createSessionSuccess)

    expect(initialStore.getState().globalState.error).to.equal(undefined)
  })
})
