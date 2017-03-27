import React from 'react';

import { Modal } from 'reactstrap';



import { changeStatusModal } from '../../helper/helperFrontend';

export default class PersonalInfo extends React.Component{

  componentWillMount(){
    this.images = []
  }

  constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }


  getImageUrl() {
    return this.props.user.avatar.url;
  }

  render() {

    const {
           photoIndex,
           isOpen,
       } = this.state;

    return (
    <div className='PersonalInfo'>
      <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
      <img src={this.props.user.croppersAvatar.url} style={{ maxWidth: 300 }, {cursor: 'pointer'}} onClick={() => {this.images.push(this.props.user.avatar.url, null), this.setState({ isOpen: true }) } } />

      
    </div>
    );
  }
};
