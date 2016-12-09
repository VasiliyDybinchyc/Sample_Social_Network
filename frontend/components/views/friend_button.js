import React from 'react';
import    * as axiosFriend  from '../../axios/axios-friend';

export default React.createClass({

  onSubmitFriend: function(event) {
    event.preventDefault();
    let FriendId = this.props.userId;
    axiosFriend.newFriend(FriendId).then(function () {
      axiosFriend.checkIsThisUserIsFriend(FriendId);
      axiosFriend.getFriends(FriendId)
    });
  },

  render: function() {
    return (
      <div className="user-profile">
        <form onSubmit={this.onSubmitFriend} >
          <button>Start making friends</button>
        </form>
      </div>
    );
  }

});
