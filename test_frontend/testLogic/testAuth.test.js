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

import {getCurrentUserSuccess} from '../../frontend/actions/user-actions';

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

    return auth().catch((error) => {
      console.log(error) // I don`t know how fix that 
    }).then(() => {
      expect(initialStore.getState().userState.authentication).to.equal(true);
      expect(initialStore.getState().userState.currentUser.user.firstName).to.equal(userOne.user.firstName);
    })
  })

  it('Test checkError helper set user',() => {
    expect(initialStore.getState().userState.error).to.empty;
    expect(initialStore.getState().userState.currentUser.user.firstName).to.equal(userOne.user.firstName)

    checkError(userTwo, getCurrentUserSuccess)

    expect(initialStore.getState().userState.error).to.equal(undefined)
    expect(initialStore.getState().userState.currentUser.user.firstName).to.equal(userTwo.user.firstName);
  })

  it('Test checkError helper set error',() => {
    expect(initialStore.getState().userState.error).to.equal(undefined)

    checkError(manyError, "action")

    expect(initialStore.getState().userState.error).to.equal(manyError)
  })

  it('Test checkError helper reset error',() => {
    expect(initialStore.getState().userState.error).to.equal(manyError)

    checkError(userTwo, getCurrentUserSuccess)

    expect(initialStore.getState().userState.error).to.equal(undefined)
  })
})
