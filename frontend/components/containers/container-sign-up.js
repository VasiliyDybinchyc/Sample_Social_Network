import React           from 'react';
import NProgress       from 'react-nprogress';

import ErrorViews      from '../views/error';
import CreateUser      from '../views/create_user';

import { connect }     from 'react-redux';

import { createUser }  from '../../auth/authRequest';

import { resetError }  from '../../helper/helperFrontend';

const SignUp = React.createClass({

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

    let dataUser = {}

    dataUser.first_name =             this.refs.child.getFirstName()
    dataUser.last_name =              this.refs.child.getLastName()
    dataUser.email =                  this.refs.child.getEmail()
    dataUser.password =               this.refs.child.getPassword()
    dataUser.password_confirmation =  this.refs.child.getPasswordConf()

    createUser(dataUser)
  },

  render: function() {
    return (
      <div>
        {this.props.error && <ErrorViews error={this.props.error} /> }
        <CreateUser onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  },
});
const mapStateToProps = function(store) {

  return {
    error: store.globalState.error
  };
};

export default connect(mapStateToProps)(SignUp);
