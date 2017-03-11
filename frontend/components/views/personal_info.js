import React from 'react';

import { Modal } from 'reactstrap';

import { changeStatusModal } from '../../helper/helperFrontend';

export default class PersonalInfo extends React.Component{

  getImageUrl() {
    return this.refs.image.src;
  }

  render() {
    return (
    <div className='PersonalInfo'>
      <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
      <img src={this.props.user.croppersAvatar.url} style={{ maxWidth: 300 }} onClick={() => changeStatusModal(!this.props.status)} ref="image" />
    </div>
    );
  }
};
