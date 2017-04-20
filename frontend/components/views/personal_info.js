import React from 'react';


export default class PersonalInfo extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
        photoIndex: 0,
        isOpen: false
    };
  }

  componentWillMount(){
    this.images = []

    const { photoIndex,
            isOpen
          } =  this.state;
  }

  getImageUrl() {
    return this.props.user.avatar.url;
  }

  render() {
    return (
      <div className='PersonalInfo'>
        <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
        <img src={this.props.user.croppersAvatar.url} style={{maxWidth: 300, maxHeight: 400, minWidth: 200, minHeight: 200, cursor: 'pointer' }} onClick={() => {this.images.push(this.props.user.avatar.url, null), this.setState({ isOpen: true }) } } />
      </div>
    );
  }
};
