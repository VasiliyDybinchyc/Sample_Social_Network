import   React                  from 'react';
import { connect }              from 'react-redux';
import { Link }                 from 'react-router';
import    * as axiosFriend      from '../../axios/axios-friend';
import   AllFriendUserViews  from '../views/all_user';

const AllFrendUser = React.createClass({

  componentWillMount: function() {
    var Id = this.props.params.userId

    axiosFriend.getAllFriends(Id)
  },

  render: function() {
    return(
      <div className="All-friends">
        <h1>All friends</h1>
        <AllFriendUserViews list={this.props.allUserFriends} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    allUserFriends: store.friendsState.allUserFriends
  };
};

export default connect(mapStateToProps)(AllFrendUser);
