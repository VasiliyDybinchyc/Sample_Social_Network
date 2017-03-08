import React from 'react';

import ReactCrop from 'react-image-crop'

export default class PersonalInfo extends React.Component{

  render() {
    return (
    <div className='PersonalInfo'>
      <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
      <img src={this.props.user.avatar.url} style={{ maxWidth: 200 }} ></img>
    </div>
    );
  }
};
{/* <link rel='stylesheet' href='ReactCrop.css'/>
<ReactCrop src={this.props.user.avatar.url} crop={crop} /> */}
