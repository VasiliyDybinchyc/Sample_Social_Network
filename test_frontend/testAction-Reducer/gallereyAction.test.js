import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as newsActions from '../../frontend/actions/actions-gallerey';

import { imageOne, menyImages } from '../fakeData/fakeResponse'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import gallereyReducer from '../../frontend/reducers/gallerey-reducer';

import { createStore } from 'redux';

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('Test actions galerey', () => {

  let store, createdStore

  beforeEach( () => {
    createdStore = createStore(gallereyReducer);
    store = createdStore;
  })

  it('Action postGallereySuccess change value store state lastPostGallerey from undefined on imageOne', () => {
    expect(store.getState().gallerey[0]).to.equal(undefined)
    store.dispatch(newsActions.postGallereySuccess(imageOne))
    expect(store.getState().gallerey).to.equal(imageOne)
  })

  it('Action getGallereySuccess change value store state gallerey from undefined on menyImages', () => {
    expect(store.getState().gallerey[0]).to.equal(undefined)
    store.dispatch(newsActions.getGallereySuccess(menyImages))
    expect(store.getState().gallerey).to.equal(menyImages)
  })

  it('Action resetGallereyProps change value store state gallerey from menyImages on undefined', () => {
    store.dispatch(newsActions.getGallereySuccess(menyImages))
    expect(store.getState().gallerey).to.equal(menyImages)

    store.dispatch(newsActions.resetGallereyProps())
    expect(store.getState().gallerey).to.equal(undefined)
  })
})
