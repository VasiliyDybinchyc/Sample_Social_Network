import    React                   from 'react';
import  { connect }               from 'react-redux';
import  { Link, browserHistory }  from 'react-router';
import    * as axiosUser          from '../../axios/axios-user';
import    * as axiosSessions      from '../../axios/axios-sessions';
import    NotLoginNav             from '../views/not_login_nav';
import    LoginNav                from '../views/login_nav';
import    NProgress               from 'react-nprogress';
import { Container }              from 'reactstrap';

const RootPath = React.createClass({

  getInitialState: function() {
    return {
      render: false
    };
  },

  updateProps: function() {
    axiosUser.authentication().then(function() {
      NProgress.done()
      this.setState({render: true}); }.bind(this));
  },

  componentWillMount: function() {
    NProgress.start();
    this.updateProps();
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
          <script src='nprogress.js'></script>
          <link rel='stylesheet' href='nprogress.css'/>
          {this.state.render = false ? null:
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
    store: store,
    authentication: store.userState.authentication,
    userId: store.userState.currentUser.id
  };
};

export default connect(mapStateToProps)(RootPath);
