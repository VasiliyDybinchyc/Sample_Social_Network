import React                from 'react';
import { connect }          from 'react-redux';
import  { browserHistory }  from 'react-router';

import CreateUserViews           from '../views/create_user';

import   * as axiosUser     from '../../axios/axios-user';


const EditUser = React.createClass({

  onSubmit: function(event) {
    event.preventDefault();

    let user = {};
    let userId = this.props.userId;

    user.first_name            = this.refs.child.getFirstName();
    user.last_name             = this.refs.child.getLastName();
    user.email                 = this.refs.child.getEmail();
    user.password              = this.refs.child.getPassword();
    user.password_confirmation = this.refs.child.getPasswordConf();

    axiosUser.editUser(user, userId).then(function () {
      axiosUser.getCurrentUser();
      browserHistory.push('/profile');
    });
  },

  render: function() {
    return (
      <div>
        <CreateUserViews onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  },
});

const mapStateToProps = function(store) {
  return {
    userId: store.userState.currentUser.id
  };
};

export default connect(mapStateToProps)( EditUser );
