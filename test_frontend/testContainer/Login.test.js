"use strict";

import { expect }           from 'chai'
import React                from 'react'
import jsdom                from 'jsdom'
import thunk                from 'redux-thunk'
import configureMockStore   from 'redux-mock-store'

import { describe, it }     from 'mocha'
import { mount, shallow }   from 'enzyme'

import { mockStore,
        storeStateMockUserNotLogin } from '../fakeData/fakeStore'

import ContainerLoginUser   from '../../frontend/components/containers/container-login-user'
import CreateSession          from '../../frontend/components/views/create_session';

import sinon from 'sinon'

import ReactTestUtils from 'react-addons-test-utils'

import { containerLogin } from '../fakeData/fakeProvider'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

global.document = doc
global.window = doc.defaultView

describe('Login page', () => {

  describe('Container test', () => {

    let store,
        wrapper

    beforeEach( () => {
      store = mockStore(storeStateMockUserNotLogin);
      wrapper = mount(containerLogin(store))
    })

    it('Container rendered', () => {
      expect(wrapper.length).to.equal(1);
    })

    describe('CreateSession views', () => {

      it('Contains a Form', () => {
        expect(wrapper.find('Form').length).to.equal(1);
      })

      it('Contains two FormGroup', () => {
        expect(wrapper.find('FormGroup').length).to.equal(2);
      })

      it('Contains a input for Email', () => {
        expect(wrapper.find('#LoginEmail').length).to.equal(1);
      })

      it('Contains a input for Password', () => {
        expect(wrapper.find('#LoginPassword').length).to.equal(1);
      })

      it('Click on Submit button called onSubmit function', () => {
        let onButtonClick = sinon.spy();
        wrapper = mount(<CreateSession onSubmit={onButtonClick}  />)
        wrapper.find('#sessionSubmitButton').simulate('click')
        expect(onButtonClick.calledOnce).to.be.true;
      })
    })
  })
})
