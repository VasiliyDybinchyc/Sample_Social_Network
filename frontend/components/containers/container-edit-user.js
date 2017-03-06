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
