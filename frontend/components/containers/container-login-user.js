import React                  from 'react';

import CreateSession          from '../views/create_session';

import    * as axiosUser      from '../../axios/axios-user';
import    * as axiosSessions  from '../../axios/axios-sessions';

const LogIn = React.createClass({

  onSubmit: function(event) {
    event.preventDefault();

    let user = {};
    user.email      = this.refs.child.getEmail();
    user.password   = this.refs.child.getPassword();

    axiosSessions.createSession(user).then(function () {
      axiosUser.authentication()
    });
  },

  render: function() {
    return (
      <div>
        <CreateSession onSubmit={this.onSubmit} ref="child" />
      </div>
    );
  },
});

export default ( LogIn );
