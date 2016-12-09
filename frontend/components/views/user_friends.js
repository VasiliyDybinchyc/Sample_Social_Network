import React from 'react';
import { Link } from 'react-router';

export default class Frends extends React.Component{
  render() {
    var Frends = this.props.user_friends

    var FrendsLength = this.props.user_friends.length;

    var UserFrendMap = Frends.map( function(user_friends, index) {
        return (
          <Link to={"/users/" + user_friends.id} key={index} className="avatar-frend" >
            <img className="avatar-frend" src={user_friends.avatar.url} width="35" height="35"></img>
          </Link>
        );
      });

    return (
      <div>
        <div className='Frend'>
          <section id="frends-filed">
            <h3 id="title-frends-filed">My frend</h3>
            { FrendsLength > 0 ?
            <div id="frends_avatars">
              {UserFrendMap}
            </div>
            : 'You not have frend' }
          </section>
        </div>
      </div>
    );
  }
};
