import React from 'react';
import { Link } from 'react-router';

export default class NotLoginNav extends React.Component{
  render() {
    return (
    <div className='nav'>
      <h1>Please
      <Link to="/signup" activeClassName="active"> Sign up </Link>
      or
      <Link to="/login" activeClassName="active"> Log in</Link>
      </h1>
    </div>
    );
  }
};
