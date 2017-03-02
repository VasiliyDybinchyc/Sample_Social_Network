import React from 'react';

export default class PersonalInfo extends React.Component{

  render() {
    return (
    <div className='PersonalInfo'>
      <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
      <img src={this.props.user.avatar == undefined ? '/defaultavatar.jpg' : this.props.user.avatar.url }></img>
      {/* I don know why but if i just point out in src this.props.user.avatar.url on page another user will be error */}
    </div>
    );
  }
};
