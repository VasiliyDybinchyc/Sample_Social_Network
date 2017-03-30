"use strict";

import React                from 'react'
import jsdom                from 'jsdom'
import { expect }           from 'chai'
import thunk                from 'redux-thunk'
import configureMockStore   from 'redux-mock-store'

import { describe, it }     from 'mocha'
import { mount, shallow }   from 'enzyme'

import { mockStore,
        storeStateMockUserLogin,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import { containerRoot } from '../fakeData/fakeProvider'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

global.document = doc
global.window = doc.defaultView

describe('Root page', () => {

  describe('Container test', () => {

    let store,
        wrapper

    beforeEach( () => {
      store = mockStore(storeStateMockUserNotLogin);
      wrapper = mount(containerRoot(store))
    })

    it('Container rendered', () => {
      expect(wrapper.length).to.equal(1);
    })

    it('Contains a Container', () => {
      expect(wrapper.find('Container').length).to.equal(1);
    })

    it('Contains a yield', () => {
      expect(wrapper.find('.yield').length).to.equal(1);
    })

    describe('User not Login', () => {

      beforeEach( () => {
        store = mockStore(storeStateMockUserNotLogin);
        wrapper = mount(containerRoot(store))
      })

      describe('Navbar test', () => {

        it('Contains right navbar', () => {
          expect(wrapper.find('NotLoginNav').length).to.equal(1);
        })

        it('Contains Navbar', () => {
          expect(wrapper.find('Navbar').length).to.equal(1);
        })

        it('Contains NavbarBrand', () => {
          expect(wrapper.find('NavbarBrand').length).to.equal(1);
        })

        it('Contains Nav', () => {
          expect(wrapper.find('Nav').length).to.equal(1);
        })

        it('Contains two NavItem', () => {
          expect(wrapper.find('NavItem').length).to.equal(2);
        })

        it('Contains two Button', () => {
          expect(wrapper.find('Button').length).to.equal(2);
        })
      })
    });

    describe('User Login', () => {

      beforeEach( () => {
        store = mockStore(storeStateMockUserLogin);
        wrapper = mount(containerRoot(store))
      })

      describe('Navbar test', () => {

        it('Contains right navbar', () => {
          expect(wrapper.find('LoginNav').length).to.equal(1);
        })

        it('Contains Navbar', () => {
          expect(wrapper.find('Navbar').length).to.equal(1);
        })

        it('Contains NavbarBrand', () => {
          expect(wrapper.find('NavbarBrand').length).to.equal(1);
        })

        it('Contains Nav', () => {
          expect(wrapper.find('Nav').length).to.equal(1);
        })

        it('Contains six NavItem', () => {
          expect(wrapper.find('NavItem').length).to.equal(6);
        })

        it('Contains one Button', () => {
          expect(wrapper.find('Button').length).to.equal(1);
        })
      })
    })
  })
})
