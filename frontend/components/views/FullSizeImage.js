import React from 'react';
import { Modal } from 'reactstrap';

import { changeStatusModal }                 from '../../helper/helperFrontend';

export default class FullSize extends React.Component {

  toggle() {
    changeStatusModal(!this.props.status)
  };

  render(){
    return (
      <div>
        <Modal isOpen={this.props.status} toggle={this.toggle.bind(this)} backdrop={true} >
          <img src={this.props.url} />
        </Modal>
      </div>
    )
  }
}
