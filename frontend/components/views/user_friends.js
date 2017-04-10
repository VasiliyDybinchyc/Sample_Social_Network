import React from 'react';
import { Link } from 'react-router';
import { Button } from 'reactstrap';

export default class Frends extends React.Component{
  render() {
    var Frends = this.props.user_friends

    var FrendsLength = this.props.user_friends.length;

    var UserFrendMap = Frends.slice(0, 8).map( function(user_friends, index) {
        return (
          <Link to={"/users/" + user_friends.id} key={index} className="avatar-friend" >
            <img className="avatar-friend" src={user_friends.avatar.url} width="35" height="35"></img>
          </Link>
        );
      });

    return (
      <div className='Friend'>
        <div className="title-frends-filed">
          <Link to={'/allFrend/' + this.props.userId}>Friend</Link>
        </div>
        <div id="friends-filed">
          { FrendsLength > 0 ?
          <div id="friends_avatars">
            {UserFrendMap}
          </div>
          : 'You not have friend' }
        </div>
      </div>
    );
  }
};
