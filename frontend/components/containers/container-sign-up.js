import React              from 'react';
import  { connect }       from 'react-redux';
import ErrorViews         from '../views/error';
import CreateUser         from '../views/create_user';
import NProgress          from 'react-nprogress';

import   * as axiosUser   from '../../axios/axios-user';

import { auth }    from '../../helper/logic';


const SignUp = React.createClass({

  componentWillMount: function() {
      NProgress.start();
    },

  componentDidMount: function() {
      NProgress.done()
    },

  onSubmit: function(event) {
    event.preventDefault();

    let dataUser = new FormData()

    dataUser.append('user[first_name]',             this.refs.child.getFirstName())
    dataUser.append('user[last_name]',              this.refs.child.getLastName())
    dataUser.append('user[email]',                  this.refs.child.getEmail())
    dataUser.append('user[password]',               this.refs.child.getPassword())
    dataUser.append('user[password_confirmation]',  this.refs.child.getPasswordConf())
    dataUser.append('user[avatar]',                 this.refs.child.getAvatar())
    dataUser.append('user[croppersAvatar]',         this.refs.child.getCroppersAvatar())

    console.log(dataUser)

    axiosUser.createUser(dataUser).then(function () {
      auth()
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
