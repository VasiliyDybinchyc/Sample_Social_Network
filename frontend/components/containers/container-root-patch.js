import    React                 from 'react';
import    NProgress             from 'react-nprogress';

import    LoginNav              from '../views/login_nav';
import    NotLoginNav           from '../views/not_login_nav';

import  { connect }             from 'react-redux';
import  { browserHistory }      from 'react-router';

import  { Container }           from 'reactstrap';

import  { getCurrentUser }      from '../../axios/axios-user';

import  { resetCurrentUser,
          checkReadyToRender }  from '../../helper/helperFrontend';

import AuthN from 'j-toker';

const RootPath = React.createClass({

  componentWillMount: function() {
    this.updateProps();
  },

  updateProps: function() {
    getCurrentUser()
  },

  onSubmit: function(event) {
    event.preventDefault();
    resetCurrentUser()
    browserHistory.push('/')
    AuthN.signOut()
  },

  render: function() {
    return (
      <div className="app">
        {this.props.render &&
          <Container>
            <div className="navbar">
              {this.props.currentUser == false ? <NotLoginNav /> :
              <LoginNav onSubmit={this.onSubmit} userId={this.props.currentUser.id} /> }
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
    currentUser: store.sessionState.sessions,
    
    render: store.globalState.render = checkReadyToRender(store.sessionState.sessions)
  };
};

export default connect(mapStateToProps)(RootPath);
