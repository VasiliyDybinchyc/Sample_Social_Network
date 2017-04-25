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
    this.printInfo()

    this.images = []

    const { photoIndex,
            isOpen
          } =  this.state;
  }

  getImageUrl() {
    return this.props.user.avatar.url;
  }

  printInfo() {
    this.nameUser = <h2>{this.props.user.nickname} </h2>
    if (this.props.user.provider == 'github') {
      this.avatarUser = <img src={this.props.user.image} style={{maxWidth: 300, maxHeight: 400, minWidth: 200, minHeight: 200, cursor: 'pointer' }} onClick={() => {this.images.push(this.props.user.avatar.url, null), this.setState({ isOpen: true }) } } />
    } else {
      this.avatarUser = <img src={this.props.user.croppersAvatar.url} style={{maxWidth: 300, maxHeight: 400, minWidth: 200, minHeight: 200, cursor: 'pointer' }} onClick={() => {this.images.push(this.props.user.avatar.url, null), this.setState({ isOpen: true }) } } />
    }
  }

  render() {
    return (
      <div className='PersonalInfo'>
        {this.nameUser}
        {this.avatarUser}
      </div>
    );
  }
};
