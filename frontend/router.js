import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import RootPath from './components/containers/container-root-patch'

import Login from './components/containers/container-login-user';

import Signup from './components/containers/container-sign-up.js';

import CurrentUserProfileContainer from './components/containers/container-current-user-profile';

import UserEdit from './components/containers/container-edit-user';

import UserProfile from './components/containers/container-user-profile';

import AllUser from './components/containers/container-all-user';

import Galerey from './components/containers/container-galerey-user';

import allFrend from './components/containers/container-all-frend';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={RootPath} >
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="profile" component={CurrentUserProfileContainer} />
      <Route path="users/:userId" component={UserProfile} />
      <Route path="editProfile" component={UserEdit} />
      <Route path="AllUser" component={AllUser} />
      <Route path="Galerey/:userId/page/:pageNumber" component={Galerey} />
      <Route path="allFrend/:userId" component={allFrend} />
    </Route>
  </Router>
);
