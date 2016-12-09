import    React                   from 'react';
import  { connect }               from 'react-redux';
import  { Link, browserHistory }  from 'react-router';
import    * as axiosUser          from '../../axios/axios-user';
import    * as axiosSessions      from '../../axios/axios-sessions';
import    NotLoginNav             from '../views/not_login_nav';
import    LoginNav                from '../views/login_nav';

const RootPath = React.createClass({

  componentWillMount: function() {
    axiosUser.authentication()
  },

  onSubmit: function(event) {
    event.preventDefault();
    let userId = this.props.store.userState.currentUser.id;
    axiosSessions.deleteSession(userId).then(function () {
      axiosUser.authentication();
      browserHistory.push('/')
    });
  },

  render: function() {
    return (
      <div className="app">

        <div className="navbar">
          {this.props.authentication == false ?
          <NotLoginNav /> :
          <LoginNav onSubmit={this.onSubmit} userId={this.props.userId} /> }
        </div>

        <div className="yield">
          {this.props.children}
        </div>

      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    store: store,
    authentication: store.userState.authentication,
    userId: store.userState.currentUser.id
  };
};

export default connect(mapStateToProps)(RootPath);
