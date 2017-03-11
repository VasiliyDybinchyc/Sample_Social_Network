import React from 'react';
import { Modal } from 'reactstrap';

import { changeStatusModal }                 from '../../helper/helperFrontend';

export default class FullSize extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Modal: true};
  };

  toggle() {
    this.setState({
      Modal: !this.state.Modal
    });
    changeStatusModal(!this.props.status)
  };

  testClickImage() {
    console.log('Click')
    this.setState({
      Modal: !this.state.Modal
    })
  };

  render(){
    return (
      <div>
        <Modal isOpen={this.state.Modal} toggle={this.toggle.bind(this)} backdrop={true} >
          <img src={this.props.url} />
        </Modal>
      </div>
    )
  }
}
