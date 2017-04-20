import   React                 from 'react';
import   NProgress             from 'react-nprogress';

import    CreateUserViews      from '../views/edit_user';

import  { connect }            from 'react-redux';

import  { editUser,
          getCurrentUser }     from '../../axios/axios-user';

import { resetError,
         checkReadyToRender }  from '../../helper/helperFrontend';


const EditUser = React.createClass({

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
    let userId = this.props.user.id;

    let dataUser = new FormData()

    dataUser.append('user[first_name]',             this.refs.child.getFirstName())
    dataUser.append('user[last_name]',              this.refs.child.getLastName())
    dataUser.append('user[avatar]',                 this.refs.child.getAvatar())
    dataUser.append('user[croppersAvatar]',         this.refs.child.getCroppersAvatar())

    editUser(dataUser, userId).then(function () {
      getCurrentUser();
    });
  },

  render: function() {
    return (
      <div>
        {this.props.render &&
          <CreateUserViews onSubmit={this.onSubmit} ref="child" user={this.props.user} />
        }
      </div>
    );
  },
});

const mapStateToProps = function(store) {
  return {
    error: store.globalState.error,
    user: store.sessionState.sessions,


    render: store.globalState.render = checkReadyToRender(store.sessionState.sessions)
  };
};

export default connect(mapStateToProps)( EditUser );
