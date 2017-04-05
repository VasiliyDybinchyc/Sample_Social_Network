import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as friendActions from '../../frontend/actions/friends-action';

import { userOne, manyUsers } from '../fakeData/fakeResponse'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import friendsReducer from '../../frontend/reducers/friends-reducer';

import { createStore } from 'redux';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('Test actions friends', () => {

  let store, createdStore

  beforeEach( () => {
    createdStore = createStore(friendsReducer);
    store = createdStore;
  })

  it('Action newFriendSuccess change value store state friends from undefined on userOne', () => {
    expect(store.getState().friends).to.equal(undefined)
    store.dispatch(friendActions.newFriendSuccess(userOne))
    expect(store.getState().friends).to.equal(userOne)
  })

  it('Action deleteFriendSuccess change value store state friends from userOne on undefined', () => {
    store.dispatch(friendActions.newFriendSuccess(userOne))
    expect(store.getState().friends).to.equal(userOne)

    store.dispatch(friendActions.deleteFriendSuccess())
    expect(store.getState().friends).to.equal(undefined)
  })

  it('Action getFriendsSuccess change value store state userFriends from undefined on manyUsers', () => {
    expect(store.getState().userFriends).to.equal(undefined)
    store.dispatch(friendActions.getFriendsSuccess(manyUsers))
    expect(store.getState().userFriends).to.equal(manyUsers)
  })

  it('Action getAllFriendsSuccess change value store state allUserFriends from empty on manyUsers', () => {
    expect(store.getState().allUserFriends).to.empty
    store.dispatch(friendActions.getAllFriendsSuccess(manyUsers))
    expect(store.getState().allUserFriends).to.equal(manyUsers)
  })

  it('Action checkIsThisUserIsFriendSuccess change value store state checkIsThisUserIsFriend from empty on true', () => {
    expect(store.getState().checkIsThisUserIsFriend).to.empty
    store.dispatch(friendActions.checkIsThisUserIsFriendSuccess(true))
    expect(store.getState().checkIsThisUserIsFriend).to.equal(true)
  })

  it('Action resetFriendProps change value store state userFriends from manyUsers on undefined', () => {
    store.dispatch(friendActions.getFriendsSuccess(manyUsers))
    expect(store.getState().userFriends).to.equal(manyUsers)

    store.dispatch(friendActions.resetFriendProps())
    expect(store.getState().userFriends).to.equal(undefined)
  })
})
