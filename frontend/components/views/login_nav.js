import React from 'react';
import { Link } from 'react-router';

export default class LoginNav extends React.Component{

  render() {
    var userId = this.props.userId
    return (
    <div className='nav'>
    <ul>
      <li><Link to="/profile" activeClassName="active">profile</Link></li>
      <li><Link to="/editProfile" activeClassName="active">Edit Profile</Link></li>
      <li><Link to="/AllUser" activeClassName="active">All user</Link></li>
      <li><Link to={"/Galerey/" + userId} activeClassName="active">My Galerey</Link></li>
      <li><Link to={"/allFrend/" + userId} activeClassName="active">My friend</Link></li>
    </ul>
      <form onSubmit={this.props.onSubmit} className="LogOut-button">
           <button>LogOut</button>
      </form>
    </div>
    );
  }
};
