import React                  from 'react';

import CreateSession          from '../views/create_session';
import NProgress              from 'react-nprogress';

import    * as axiosUser      from '../../axios/axios-user';
import    * as axiosSessions  from '../../axios/axios-sessions';

import  { connect }       from 'react-redux';
import ErrorViews         from '../views/error';

import { resetError } from '../../helper/helperFrontend';

import { auth }    from '../../helper/logic';

const LogIn = React.createClass({

  componentWillMount: function() {
      NProgress.start();
    },

  componentDidMount: function() {
      NProgress.done()
    },

  componentWillUnmount: function() {
      resetError()
    },

  onSubmit: function(event) {
    event.preventDefault();

    let user = {};
    user.email      = this.refs.child.getEmail();
    user.password   = this.refs.child.getPassword();

    axiosSessions.createSession(user).then(function () {
      auth(true)
    });
  },

  render: function() {
    return (
      <div>
        {this.props.error == undefined ? null : <ErrorViews error={this.props.error} /> }
        <CreateSession onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  },
});

const mapStateToProps = function(store) {

  return {
    error: store.globalState.error
  };
};

export default connect(mapStateToProps)(LogIn);
