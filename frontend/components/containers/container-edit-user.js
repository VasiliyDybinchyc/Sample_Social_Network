import    React              from 'react';
import  { connect }          from 'react-redux';
import  { browserHistory }   from 'react-router';
import    CreateUserViews    from '../views/edit_user';
import    ErrorViews         from '../views/error';
import    * as axiosUser     from '../../axios/axios-user';
import   NProgress           from 'react-nprogress';

import { checkReadyToRender, resetError } from '../../helper/helperFrontend';

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

    axiosUser.editUser(dataUser, userId).then(function () {
      axiosUser.getCurrentUser();
    });
  },

  render: function() {
    return (
      <div>
        {this.props.error == undefined ? null : <ErrorViews error={this.props.error} /> }
        {this.props.render &&
          <CreateUserViews onSubmit={this.onSubmit} ref="child" user={this.props.user} />
        }
      </div>
    );
  },
});

const mapStateToProps = function(store) {
  return {
    user: store.sessionState.sessions,
    error: store.globalState.error,
    render: store.globalState.render = checkReadyToRender(store.sessionState.sessions)
  };
};

export default connect(mapStateToProps)( EditUser );
