import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as userActions from '../../frontend/actions/user-actions';

import { fakeUser, UserOne, UserTwo, manyUsers, errorOne, errorTwo } from '../fakeData/fakeResponse'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import userReducer from '../../frontend/reducers/user-reducer';
/*
import newsReducer from '../../frontend/reducers/news-reducer';
import friendsReducer from '../../frontend/reducers/friends-reducer';
import sessionReducer from '../../frontend/reducers/session-reducer';
import gallereyReducer from '../../frontend/reducers/gallerey-reducer';
*/
import { createStore } from 'redux';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

/*
Little description if you see strange test like a "Sad test"
and you do not understand why I do it this way this because
nock ('or something') does not have time to fulfill next action
and I did not think of anything better than to allow him to be late
until the next test and check him state

but if you know how do this sed test happy
please send me a message on : VasiliyDybinchyk@gmail.com
*/

describe('Test actions user', () => {

  let store, createdStore

  before( () => {
    createdStore = createStore(userReducer);
    store = createdStore;
  })

  it('Test action getCurrentUserSuccess', () => {
    expect(store.getState().currentUser).to.not.equal(UserOne);
    store.dispatch(userActions.getCurrentUserSuccess(UserOne))
    expect(store.getState().currentUser).to.equal(UserOne);
  })

  it('Test action getProfileSuccess', () => {
    expect(store.getState().userProfile).to.not.equal(UserOne);
    store.dispatch(userActions.getProfileSuccess(UserOne))
    expect(store.getState().userProfile).to.equal(UserOne);
  })

  it('Test action editUserSuccess', () => {
    expect(store.getState().currentUser).to.not.equal(UserTwo);
    store.dispatch(userActions.editUserSuccess(UserTwo))
    expect(store.getState().currentUser).to.equal(UserTwo);
  })

  it('Test action createUserSuccess', () => {
    expect(store.getState().currentUser).to.not.equal(UserOne);
    store.dispatch(userActions.createUserSuccess(UserOne))
    expect(store.getState().currentUser).to.equal(UserOne);
  })

  it('Test action getUsersSuccess', () => {
    expect(store.getState().users).to.not.equal(manyUsers);
    store.dispatch(userActions.getUsersSuccess(manyUsers))
    expect(store.getState().users).to.equal(manyUsers);
  })

  it('Test action createUserError', () => {
    expect(store.getState().error).to.not.equal(errorOne);
    store.dispatch(userActions.createUserError(errorOne))
    expect(store.getState().error).to.equal(errorOne);
  })

  it('Test action editUserError', () => {
    expect(store.getState().error).to.not.equal(errorTwo);
    store.dispatch(userActions.createUserError(errorTwo))
    expect(store.getState().error).to.equal(errorTwo);
  })

  it('Test action resetErrorProps', () => {
    expect(store.getState().error).to.equal(errorTwo);
    store.dispatch(userActions.resetErrorProps())
    expect(store.getState().error).to.equal(undefined);
  })

  it('Test action resetProfileProps', () => {
    expect(store.getState().userProfile).to.equal(UserOne);
    store.dispatch(userActions.resetProfileProps())
    expect(store.getState().userProfile).to.equal(undefined);
  })

  describe('Sad test', () => {

    before( () => {
      createdStore = createStore(userReducer);
      store = createdStore;
    })

    it('Sad test check value', () => {
     expect(store.getState().authentication).to.not.equal(true);
     expect(initialStore.getState().userState.currentUser).to.empty
    })

    it('Sad preparation', () => {
      nock(host)
        .get('/users/getCurrentUser')
        .reply(200, UserOne)
      store.dispatch(userActions.authenticationSuccess(true))
    })

    it('Sad test action authenticationSuccess', () => {
     expect(store.getState().authentication).to.equal(true);
     expect(initialStore.getState().userState.currentUser.user.firstName).to.equal(UserOne.user.firstName) ;
    })
  })
})
