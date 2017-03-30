import initialStore from '../../frontend/store'

import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { expect } from 'chai'
import { describe, it }     from 'mocha'

import * as userActions from '../../frontend/actions/user-actions';

import { fakeUser } from '../fakeData/fakeResponse'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import userReducer from '../../frontend/reducers/user-reducer';
import newsReducer from '../../frontend/reducers/news-reducer';
import friendsReducer from '../../frontend/reducers/friends-reducer';
import sessionReducer from '../../frontend/reducers/session-reducer';
import gallereyReducer from '../../frontend/reducers/gallerey-reducer';
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
    store.dispatch(userActions.getCurrentUserSuccess(fakeUser))
    expect(store.getState().currentUser).to.equal(fakeUser);
  })

  describe('Sad test', () => {

    createdStore = createStore(userReducer);

    before( () => {
      store = createdStore;
    })

    it('Sad preparation', () => {
      nock(host)
        .get('/users/getCurrentUser')
        .reply(200, fakeUser)
      store.dispatch(userActions.authenticationSuccess(true))
    })

    it('Sad test action authenticationSuccess', () => {
     expect(store.getState().authentication).to.equal(true);
     expect(store.getState().currentUser.user.firstName).to.equal(fakeUser.user.firstName) ;
    })
  })
})
