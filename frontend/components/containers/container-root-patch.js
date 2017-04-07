import    React                   from 'react';
import  { connect }               from 'react-redux';
import  { Link, browserHistory }  from 'react-router';
import    * as axiosUser          from '../../axios/axios-user';
import    * as axiosSessions      from '../../axios/axios-sessions';
import    NotLoginNav             from '../views/not_login_nav';
import    LoginNav                from '../views/login_nav';
import    NProgress               from 'react-nprogress';
import {  Container }             from 'reactstrap';

import {  checkReadyToRender, ifAuthenticationTrueRedirect, resetCurrentUser }    from '../../helper/helperFrontend';

import { auth }    from '../../helper/logic';

const RootPath = React.createClass({

  componentWillMount: function() {
    this.updateProps();
  },

  updateProps: function() {
    auth()
  },

  onSubmit: function(event) {
    event.preventDefault();
    browserHistory.push('/')
    axiosSessions.deleteSession(this.props.userId)
  },

  render: function() {

      return (
        <div className="app">
          {this.props.render &&
            <Container>
              <div className="navbar">
                {this.props.authentication == false ? <NotLoginNav /> :
                <LoginNav onSubmit={this.onSubmit} userId={this.props.userId} /> }
              </div>
              <div>
              </div>
                <div className="yield">
                   {this.props.children}
                </div>
            </Container>
          }
        </div>
      );
  }

});

const mapStateToProps = function(store) {
  return {
    authentication: store.sessionState.sessions,
    userId: store.sessionState.sessions.id,
    render: store.globalState.render = checkReadyToRender(store.sessionState.sessions)
  };
};

export default connect(mapStateToProps)(RootPath);
