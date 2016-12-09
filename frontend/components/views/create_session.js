import React from 'react';

export default React.createClass({

  getEmail: function() {
    return this.refs.email.value;
  },

  getPassword: function() {
    return this.refs.password.value;
  },

  render: function() {
    return (
      <div>
        <div>Log In</div>
        <div className="user-profile">
          <form onSubmit={this.props.onSubmit} >
            <input type="text" ref="email" placeholder="Email" />
            <input type="text" ref="password" placeholder="Password" />
            <button>Log In</button>
          </form>
        </div>
      </div>
    );
  }

});
