import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as userActions from '../../frontend/actions/user-actions';

import {createSessionSuccess} from '../../frontend/actions/sessions-actions';

import { userOne, userTwo, manyUsers, errorOne, errorTwo } from '../fakeData/fakeResponse'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import userReducer from '../../frontend/reducers/user-reducer';

import { createStore } from 'redux';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('Test actions user', () => {

  let store, createdStore

  beforeEach( () => {
    createdStore = createStore(userReducer);
    store = createdStore;
  })

  it('Action getProfileSuccess change value store state userProfile from empty on userOne', () => {
    expect(store.getState().userProfile).to.empty;
    store.dispatch(userActions.getProfileSuccess(userOne))
    expect(store.getState().userProfile).to.equal(userOne);
  })

  it('Action getUsersSuccess change value store state users from empty on manyUsers', () => {
    expect(store.getState().users[0]).to.equal(null);
    store.dispatch(userActions.getUsersSuccess(manyUsers))
    expect(store.getState().users).to.equal(manyUsers);
  })

  it('Action resetProfileProps change value store state userProfile from userOne on undefined', () => {
    store.dispatch(userActions.getProfileSuccess(userOne))
    expect(store.getState().userProfile).to.equal(userOne);

    store.dispatch(userActions.resetProfileProps())
    expect(store.getState().userProfile[0]).to.equal(null);
  })
})
