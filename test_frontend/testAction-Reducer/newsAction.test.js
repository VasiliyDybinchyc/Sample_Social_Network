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

  beforeEach( () => {
    createdStore = createStore(newsReducer);
    store = createdStore;
  })

  it('Action postNews change value store state lastNews from undefined on messageOne', () => {
    expect(store.getState().news).to.empty
    store.dispatch(newsActions.postNewsSuccess(messageOne))
    expect(store.getState().news).to.equal(messageOne)
  })

  it('Action getNewsSuccess change value store state news from undefined on manyMessages', () => {
    expect(store.getState().news).to.empty
    store.dispatch(newsActions.getNewsSuccess(manyMessages))
    expect(store.getState().news).to.equal(manyMessages)
  })

  it('Action getOnlyUserNewsSuccess change value store state onlyUserNews from empty on manyMessages', () => {
    expect(store.getState().onlyUserNews).to.empty
    store.dispatch(newsActions.getOnlyUserNewsSuccess(manyMessages))
    expect(store.getState().onlyUserNews).to.equal(manyMessages)
  })

  it('Action resetNewsProps change value store state news from manyMessages on undefined', () => {
    store.dispatch(newsActions.getNewsSuccess(manyMessages))
    expect(store.getState().news).to.equal(manyMessages)

    store.dispatch(newsActions.resetNewsProps())
    expect(store.getState().news).to.equal(undefined)
  })
})
