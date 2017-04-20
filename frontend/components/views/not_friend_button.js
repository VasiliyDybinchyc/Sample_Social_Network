import React from 'react';
import    * as axiosFriend  from '../../axios/axios-friend';

import store from '../../store';
import { checkIsThisUserIsFriendSuccess } from '../../actions/friends-action';

export default React.createClass({

  onSubmitNotFriend: function(event) {
    event.preventDefault();
    let FriendId = this.props.userId;
    axiosFriend.deleteFriend(FriendId).then(function () {
      store.dispatch(checkIsThisUserIsFriendSuccess(false));
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
