import React from 'react';
import    * as axiosFriend  from '../../axios/axios-friend';

export default React.createClass({

  onSubmitNotFriend: function(event) {
    event.preventDefault();
    let FriendId = this.props.userId;
    axiosFriend.deleteFriend(FriendId).then(function () {
      axiosFriend.checkIsThisUserIsFriend(FriendId);
      axiosFriend.getFriends(FriendId)
    });
  },

  render: function() {
    return (
      <div className="user-profile">
        <form onSubmit={this.onSubmitNotFriend} >
          <button>Delete Frends</button>
        </form>
      </div>
    );
  }

});
