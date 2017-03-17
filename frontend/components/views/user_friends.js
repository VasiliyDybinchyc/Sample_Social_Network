import React from 'react';
import { Link } from 'react-router';
import { Button } from 'reactstrap';

export default class Frends extends React.Component{
  render() {
    var Frends = this.props.user_friends

    var FrendsLength = this.props.user_friends.length;

    var UserFrendMap = Frends.slice(0, 8).map( function(user_friends, index) {
        return (
          <Link to={"/user/" + user_friends.id} key={index} className="avatar-frend" >
            <img className="avatar-frend" src={user_friends.avatar.url} width="35" height="35"></img>
          </Link>
        );
      });

    return (
      <div className='Frend'>
        <div className="title-frends-filed">
          <Link to={'/allFrend/' + this.props.userId}>Frend</Link>
        </div>
        <div id="frends-filed">
          { FrendsLength > 0 ?
          <div id="frends_avatars">
            {UserFrendMap}
          </div>
          : 'You not have frend' }
        </div>
      </div>
    );
  }
};
