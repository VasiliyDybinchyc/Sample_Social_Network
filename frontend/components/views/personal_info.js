import React from 'react';

export default class PersonalInfo extends React.Component{
  render() {
    return (
    <div className='PersonalInfo'>
      <h2>{this.props.user.first_name} {this.props.user.last_name}, {this.props.user.email}</h2>
    </div>
    );
  }
};