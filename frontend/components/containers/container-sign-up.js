import React              from 'react';
import  { connect }       from 'react-redux';
import ErrorViews         from '../views/error';
import CreateUser         from '../views/create_user';
import NProgress          from 'react-nprogress';

import   * as axiosUser   from '../../axios/axios-user';


const SignUp = React.createClass({

  componentWillMount: function() {
      NProgress.start();
    },

  componentDidMount: function() {
      NProgress.done()
    },

  onSubmit: function(event) {
    event.preventDefault();

    let user = {};
    user.first_name             = this.refs.child.getFirstName();
    user.last_name              = this.refs.child.getLastName();
    user.email                  = this.refs.child.getEmail();
    user.password               = this.refs.child.getPassword();
    user.password_confirmation  = this.refs.child.getPasswordConf();

    axiosUser.createUser(user).then(function () {
      axiosUser.authentication()
    });
  },

  render: function() {
    return (
      <div>
        {this.props.error == undefined ? null : <ErrorViews error={this.props.error} /> }
        <CreateUser onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  },
});
const mapStateToProps = function(store) {

  return {
    error: store.userState.error
  };
};

export default connect(mapStateToProps)(SignUp);
