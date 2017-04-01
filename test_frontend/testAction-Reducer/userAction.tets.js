import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as userActions from '../../frontend/actions/user-actions';

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

  it('Action authentication change value store state authentication from undefined on true', () => {
    expect(store.getState().authentication).to.equal(undefined);
    store.dispatch(userActions.authenticationSuccess(true))
    expect(store.getState().authentication).to.equal(true);
  })

  it('Action getCurrentUserSuccess change value store state currentUser from empty on userOne', () => {
    expect(store.getState().currentUser).to.empty;
    store.dispatch(userActions.getCurrentUserSuccess(userOne))
    expect(store.getState().currentUser).to.equal(userOne);
  })

  it('Action getProfileSuccess change value store state userProfile from empty on userOne', () => {
    expect(store.getState().userProfile).to.empty;
    store.dispatch(userActions.getProfileSuccess(userOne))
    expect(store.getState().userProfile).to.equal(userOne);
  })

  it('Action editUserSuccess change value store state currentUser from userOne on userTwo', () => {
    store.dispatch(userActions.getCurrentUserSuccess(userOne))
    expect(store.getState().currentUser).to.equal(userOne);

    store.dispatch(userActions.editUserSuccess(userTwo))
    expect(store.getState().currentUser).to.equal(userTwo);
  })

  it('Action createUserSuccess change value store state currentUser from empty on userOne', () => {
    expect(store.getState().currentUser).to.empty;
    store.dispatch(userActions.createUserSuccess(userOne))
    expect(store.getState().currentUser).to.equal(userOne);
  })

  it('Action getUsersSuccess change value store state users from empty on manyUsers', () => {
    expect(store.getState().users).to.empty;
    store.dispatch(userActions.getUsersSuccess(manyUsers))
    expect(store.getState().users).to.equal(manyUsers);
  })

  it('Action createUserError change value store state error from undefined on errorOne', () => {
    expect(store.getState().error).to.equal(undefined);
    store.dispatch(userActions.createUserError(errorOne))
    expect(store.getState().error).to.equal(errorOne);
  })

  it('Action editUserError change value store state error from errorOne on errorTwo', () => {
    store.dispatch(userActions.createUserError(errorOne))
    expect(store.getState().error).to.equal(errorOne);

    store.dispatch(userActions.createUserError(errorTwo))
    expect(store.getState().error).to.equal(errorTwo);
  })

  it('Action resetErrorProps change value store state error from errorTwo on undefined', () => {
    store.dispatch(userActions.createUserError(errorTwo))
    expect(store.getState().error).to.equal(errorTwo);

    store.dispatch(userActions.resetErrorProps())
    expect(store.getState().error).to.equal(undefined);
  })

  it('Action resetProfileProps change value store state userProfile from userOne on undefined', () => {
    store.dispatch(userActions.getProfileSuccess(userOne))
    expect(store.getState().userProfile).to.equal(userOne);

    store.dispatch(userActions.resetProfileProps())
    expect(store.getState().userProfile).to.equal(undefined);
  })

  it('Action resetCurrentUser change value store state currentUser from userOne on empty', () => {
    store.dispatch(userActions.getCurrentUserSuccess(userOne))
    expect(store.getState().currentUser).to.equal(userOne);

    store.dispatch(userActions.resetCurrentUser())
    expect(store.getState().currentUser).to.empty
  })
})
