import React from 'react';

export default class PersonalInfo extends React.Component{

  render() {
    return (
    <div className='PersonalInfo'>
      
      <img src={this.props.user.avatar.url} style={{ maxWidth: 300 }} ></img>
    </div>
    );
  }
};
