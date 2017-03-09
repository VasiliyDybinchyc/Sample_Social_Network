import    React              from 'react';
import  { connect }          from 'react-redux';
import  { browserHistory }   from 'react-router';
import    CreateUserViews    from '../views/create_user';
import    * as axiosUser     from '../../axios/axios-user';
import   NProgress           from 'react-nprogress';

import { checkReadyToRender } from '../../helper/helperFrontend';

const EditUser = React.createClass({

  componentWillMount: function() {
      NProgress.start();
    },

  componentDidMount: function() {
      NProgress.done()
    },


  onSubmit: function(event) {
    event.preventDefault();
    let userId = this.props.userId;

    let dataUser = new FormData()

    dataUser.append('user[first_name]',             this.refs.child.getFirstName())
    dataUser.append('user[last_name]',              this.refs.child.getLastName())
    dataUser.append('user[email]',                  this.refs.child.getEmail())
    dataUser.append('user[password]',               this.refs.child.getPassword())
    dataUser.append('user[password_confirmation]',  this.refs.child.getPasswordConf())
    dataUser.append('user[avatar]',                 this.refs.child.getAvatar())
    dataUser.append('user[croppersAvatar]',         this.refs.child.getCroppersAvatar())

    axiosUser.editUser(dataUser, userId).then(function () {
      axiosUser.getCurrentUser();
      browserHistory.push('/profile');
    });
  },

  render: function() {
    return (
      <div>
        {this.props.render == false ? null :
          <CreateUserViews onSubmit={this.onSubmit} ref="child" />
        }
      </div>
    );
  },
});

const mapStateToProps = function(store) {
  return {
    userId: store.userState.currentUser.id,
    render: store.sessionState.render = checkReadyToRender(store.userState.currentUser)
  };
};

export default connect(mapStateToProps)( EditUser );
