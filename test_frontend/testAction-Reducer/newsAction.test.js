import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as newsActions from '../../frontend/actions/news-actions';

import { messageOne, messageTwo, manyMessages } from '../fakeData/fakeResponse'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import newsReducer from '../../frontend/reducers/news-reducer';

import { createStore } from 'redux';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('Test actions news', () => {

  let store, createdStore

  before( () => {
    createdStore = createStore(newsReducer);
    store = createdStore;
  })

  it('Test action postNews', () => {
    expect(store.getState().lastNews).to.equal(undefined)
    store.dispatch(newsActions.postNewsSuccess(messageOne))
    expect(store.getState().lastNews).to.equal(messageOne)
  })

  it('Test action getNewsSuccess', () => {
    expect(store.getState().news).to.equal(undefined)
    store.dispatch(newsActions.getNewsSuccess(manyMessages))
    expect(store.getState().news).to.equal(manyMessages)
  })

  it('Test action getOnlyUserNewsSuccess', () => {
    expect(store.getState().onlyUserNews).to.empty
    store.dispatch(newsActions.getOnlyUserNewsSuccess(manyMessages))
    expect(store.getState().onlyUserNews).to.equal(manyMessages)
  })
})
