import React              from 'react';

import CreateUser         from '../views/create_user';
import   * as axiosUser   from '../../axios/axios-user';


const SignUp = React.createClass({

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
        <CreateUser onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  },
});

export default ( SignUp );
