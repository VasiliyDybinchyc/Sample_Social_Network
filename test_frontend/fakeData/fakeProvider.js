import React                from 'react'
import { Provider }         from 'react-redux';

import { createMemoryHistory, createBrowserHistory } from 'history';

import { Router, Route, browserHistory, IndexRoute, useRouterHistory, match, Switch } from 'react-router';

import ContainerRootPatch   from '../../frontend/components/containers/container-root-patch'
import ContainerLoginUser   from '../../frontend/components/containers/container-login-user'

export const containerRoot = (store) => {
  return(
    <Provider store={store}>
      <Router history={createMemoryHistory()}>
        <Route path="/" component={ContainerRootPatch} />
      </Router>
    </Provider>
  )
}

export const containerLogin = () => {
  return(
    <ContainerLoginUser />
  )
}
