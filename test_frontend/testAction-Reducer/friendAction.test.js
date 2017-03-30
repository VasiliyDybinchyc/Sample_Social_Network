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

describe('Test actions news', () => {

  let store, createdStore

  before( () => {
    createdStore = createStore(friendsReducer);
    store = createdStore;
  })

  it('Test action newFriendSuccess', () => {
    expect(store.getState().friends).to.equal(undefined)
    store.dispatch(friendActions.newFriendSuccess(userOne))
    expect(store.getState().friends).to.equal(userOne)
  })

  it('Test action deleteFriendSuccess', () => {
    expect(store.getState().friends).to.equal(userOne)
    store.dispatch(friendActions.deleteFriendSuccess())
    expect(store.getState().friends).to.equal(undefined)
  })

  it('Test action getFriendsSuccess', () => {
    expect(store.getState().userFriends).to.equal(undefined)
    store.dispatch(friendActions.getFriendsSuccess(manyUsers))
    expect(store.getState().userFriends).to.equal(manyUsers)
  })

  it('Test action getAllFriendsSuccess', () => {
    expect(store.getState().allUserFriends).to.empty
    store.dispatch(friendActions.getAllFriendsSuccess(manyUsers))
    expect(store.getState().allUserFriends).to.equal(manyUsers)
  })

  it('Test action checkIsThisUserIsFriendSuccess', () => {
    expect(store.getState().checkIsThisUserIsFriend).to.empty
    store.dispatch(friendActions.checkIsThisUserIsFriendSuccess(true))
    expect(store.getState().checkIsThisUserIsFriend).to.equal(true)
  })
})
