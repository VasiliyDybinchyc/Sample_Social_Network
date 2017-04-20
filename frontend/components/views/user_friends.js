import React from 'react';
import { Link } from 'react-router';
import { Button } from 'reactstrap';

export default class Frends extends React.Component{

  componentWillMount(){

    this.FrendsLength = this.props.user_friends.length;

    this.UserFrendMap = this.props.user_friends.slice(0, 8).map( function(user_friends, index) {
        return (
          <Link to={"/users/" + user_friends.id} key={index} className="avatar-friend" >
            <img className="avatar-friend" src={user_friends.avatar.url} width="35" height="35"></img>
          </Link>
        )
      }
    )
  }

  render() {
    return (
      <div className='Friend'>
        <div className="title-frends-filed">
          <Link to={'/allFrend/' + this.props.userId}>Friend</Link>
        </div>
        <div id="friends-filed">
          { this.FrendsLength > 0 ?
          <div id="friends_avatars">
            { this.UserFrendMap }
          </div>
          : 'You not have friend' }
        </div>
      </div>
    );
  }
};
