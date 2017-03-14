import   React                  from 'react';
import { connect }              from 'react-redux';
import { Link }                 from 'react-router';
import    * as axiosFriend      from '../../axios/axios-friend';
import   AllFriendUserViews     from '../views/all_user';
import   NProgress              from 'react-nprogress';
import { checkReadyToRender }   from '../../helper/helperFrontend';

const AllFrendUser = React.createClass({

  componentWillMount: function() {
    var Id = this.props.params.userId
    NProgress.start();
    axiosFriend.getAllFriends(Id)
  },

  componentDidMount: function() {
    NProgress.done()
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
    render: store.sessionState.render = checkReadyToRender(store.friendsState.allUserFriends)
  };
};

export default connect(mapStateToProps)(AllFrendUser);
