import   React                 from 'react';
import   NProgress             from 'react-nprogress';

import   AllUserViews          from '../views/all_user';

import { connect }             from 'react-redux';

import { getUsers }            from '../../axios/axios-user';

import { checkReadyToRender }  from '../../helper/helperFrontend';

const AllUser = React.createClass({

  componentWillMount: function() {
    getUsers()
    NProgress.start();
  },

  componentDidMount: function() {
    NProgress.done()
  },

  render: function() {
    return(
      <div>
        {this.props.render &&
          <div className="All-user">
            <AllUserViews list={this.props.users} />
          </div>
        }
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users,

    render: store.globalState.render = checkReadyToRender(store.userState.users)
  };
};

export default connect(mapStateToProps)(AllUser);
