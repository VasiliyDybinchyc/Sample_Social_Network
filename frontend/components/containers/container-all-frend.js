import   React                 from 'react';
import   NProgress             from 'react-nprogress';

import   AllFriendUserViews    from '../views/all_user';

import { connect }             from 'react-redux';

import { getAllFriends }       from '../../axios/axios-friend';

import { checkReadyToRender }  from '../../helper/helperFrontend';

const AllFrendUser = React.createClass({

  componentWillMount: function() {
    NProgress.start();
    getAllFriends(this.props.params.userId)
  },

  componentDidMount: function() {
    NProgress.done()
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      getAllFriends(nextProps.params.userId);
    }
  },

  render: function() {
    return(
      <div>
        {this.props.render &&
          <div className="All-friends">
              <h1>All friends</h1>
              <AllFriendUserViews list={this.props.allUserFriends} />
          </div>
        }
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    allUserFriends: store.friendsState.allUserFriends,

    render: store.globalState.render = checkReadyToRender(store.friendsState.allUserFriends)
  };
};

export default connect(mapStateToProps)(AllFrendUser);
