"use strict";

import chai                 from 'chai'
import React                from 'react'
import jsdom                from 'jsdom'
import assert               from 'assert'
import thunk                from 'redux-thunk'
import configureMockStore   from 'redux-mock-store'

import { Provider }         from 'react-redux';
import { describe, it }     from 'mocha'
import { mount, shallow }   from 'enzyme'
import { createStore, combineReducers } from 'redux'

import { mockStore,
        storeStateMockUserLogin,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import { Router, Route, browserHistory, IndexRoute, useRouterHistory, match } from 'react-router';

import { createMemoryHistory, createBrowserHistory } from 'history';

import NotLoginNav          from '../../components/views/not_login_nav'
import ContainerRootPatch   from '../../components/containers/container-root-patch'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

global.document = doc
global.window = doc.defaultView

const container = (store) => {
  return(
    <Provider store={store}>
      <Router history={/* HISTORY */}>
          <Route path="/" component={ContainerRootPatch} />
      </Router>
    </Provider>
  )
}

chai.should();

describe('Root page', () => {

  describe('Container test', () => {

    let store,
        wrapper

    beforeEach( () => {
      store = mockStore(storeStateMockUserNotLogin);
      wrapper = mount(container(store))
    })

    it('Container rendered', () => {
      assert(wrapper.length, 'Rendered')
      assert(wrapper.find('Container').length, 'Contains a Container')
    })

    it('Contains a yield', () => {
      assert(wrapper.find('.yield').length, 'Contains a yield')
    })

    it ('Contains a navbar', () => {
      assert(wrapper.find('.navbar').length, 'Contains a navbar')
    })

    describe('User not Login', () => {

      beforeEach( () => {
        store = mockStore(storeStateMockUserNotLogin);
        wrapper = mount(container(store))
      })

      describe('Navbar test', () => {

        it('Contains right navbar', () => {
          assert(wrapper.find('NotLoginNav').length, 'Contains a NotLoginNav')
        })

        it('Contains Navbar', () => {
          assert(wrapper.find('Navbar').length, 'Contains a Navbar')
        })

        it('Contains NavbarBrand', () => {
          assert(wrapper.find('NavbarBrand').length, 'Contains a NavbarBrand')
        })

        it('Contains Nav', () => {
          assert(wrapper.find('Nav').length, 'Contains a Nav')
        })

        it('Contains two NavItem', () => {
          assert(wrapper.find('NavItem').length == 2, 'Contains two NavItem')
        })

        it('Contains two Button', () => {
          assert(wrapper.find('Button').length == 2, 'Contains two Button')
        })

        it('if click login i see page login', () => {
          wrapper.find('.loginButton').simulate('click')
          console.log(global.window.location.href)
        })

      })
    });

    describe('User Login', () => {

      beforeEach( () => {
        store = mockStore(storeStateMockUserLogin);
        wrapper = mount(container(store))
      })

      describe('Navbar test', () => {

        it('Contains right navbar', () => {
          assert(wrapper.find('LoginNav').length, 'Contains a LoginNav')
        })

        it('Contains Navbar', () => {
          assert(wrapper.find('Navbar').length, 'Contains a Navbar')
        })

        it('Contains NavbarBrand', () => {
          assert(wrapper.find('NavbarBrand').length, 'Contains a NavbarBrand')
        })

        it('Contains Nav', () => {
          assert(wrapper.find('Nav').length, 'Contains a Nav')
        })

        it('Contains six NavItem', () => {
          assert(wrapper.find('NavItem').length == 6, 'Contains six NavItem')
        })

        it('Contains one Button', () => {
          assert(wrapper.find('Button').length == 1, 'Contains one Button')
        })
      })
    })
  })
})
