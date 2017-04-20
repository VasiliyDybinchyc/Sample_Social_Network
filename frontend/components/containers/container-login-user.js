import React              from 'react';
import NProgress          from 'react-nprogress';

import ErrorViews         from '../views/error';
import CreateSession      from '../views/create_session';

import  { connect }       from 'react-redux';

import { createSession }  from '../../auth/authRequest';

import { resetError }     from '../../helper/helperFrontend';


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

    user.email      = this.refs.child.getEmail()
    user.password   = this.refs.child.getPassword()

    createSession(user)
  },

  render: function() {
    return (
      <div>
        {this.props.error && <ErrorViews error={this.props.error} /> }
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
