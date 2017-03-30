import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as sessionsActions from '../../frontend/actions/sessions-actions';

import { userOne } from '../fakeData/fakeResponse'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import sessionReducer from '../../frontend/reducers/session-reducer';

import { createStore } from 'redux';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('Test actions session', () => {

  let store, createdStore

  before( () => {
    createdStore = createStore(sessionReducer);
    store = createdStore;
  })

  it('Test action createSessionSuccess', () => {
    expect(store.getState().sessions).to.not.equal(userOne);
    store.dispatch(sessionsActions.createSessionSuccess(userOne))
    expect(store.getState().sessions).to.equal(userOne);
  })

  it('Test action deleteSessionSuccess', () => {
    expect(store.getState().sessions).to.equal(userOne);
    store.dispatch(sessionsActions.deleteSessionSuccess())
    expect(store.getState().sessions).to.equal(undefined);
  })
})
