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

describe('Test actions news', () => {

  let store, createdStore

  before( () => {
    createdStore = createStore(gallereyReducer);
    store = createdStore;
  })

  it('Test action postGallereySuccess', () => {
    expect(store.getState().lastPostGallerey).to.equal(undefined)
    store.dispatch(newsActions.postGallereySuccess(imageOne))
    expect(store.getState().lastPostGallerey).to.equal(imageOne)
  })

  it('Test action getGallereySuccess', () => {
    expect(store.getState().gallerey).to.equal(undefined)
    store.dispatch(newsActions.getGallereySuccess(menyImages))
    expect(store.getState().gallerey).to.equal(menyImages)
  })

  it('Test action resetGallereyProps', () => {
    expect(store.getState().gallerey).to.equal(menyImages)
    store.dispatch(newsActions.resetGallereyProps())
    expect(store.getState().gallerey).to.equal(undefined)
  })
})
