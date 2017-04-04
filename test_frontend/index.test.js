"use strict"

import chai                 from 'chai'
import { describe, it }     from 'mocha'

import testLogicAuth        from './testLogic/testAuth.test'
import testActionGallerey   from './testAction-Reducer/gallereyAction.test'
import testActionFriend     from './testAction-Reducer/friendAction.test'
import testActionNews       from './testAction-Reducer/newsAction.test'
import testActionUser       from './testAction-Reducer/userAction.tets'
import testActionSession    from './testAction-Reducer/sessionAction.test'

import testRoot             from './testContainer/Root.test'
import testLogin            from './testContainer/Login.test'
