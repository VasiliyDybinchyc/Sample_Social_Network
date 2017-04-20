import React from 'react';
import    * as axiosFriend  from '../../axios/axios-friend';

import store from '../../store';
import { checkIsThisUserIsFriendSuccess } from '../../actions/friends-action';


export default React.createClass({

  onSubmitFriend: function(event) {
    event.preventDefault();
    let FriendId = this.props.userId;
    axiosFriend.newFriend(FriendId).then(function () {
      store.dispatch(checkIsThisUserIsFriendSuccess(true));
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
