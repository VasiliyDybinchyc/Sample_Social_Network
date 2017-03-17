import React from 'react';
import { Link } from 'react-router';
import Lightbox from 'react-image-lightbox';

export default class Galerey extends React.Component{

  constructor(props) {
    super(props);
    this.state = { photoIndex: 0,
                   isOpen: false};
  }
  componentWillMount(){
    this.images = []
  }

  render() {

    const {
        photoIndex,
        isOpen,
    } = this.state;

    this.fullGalerey = [];

    var that = this

    this.props.user_galerey.forEach( function(galerey, index) {
      return (
          galerey.picture.url == null ? null : that.fullGalerey.push(galerey)
      );
    });

    var Galerey = this.fullGalerey

    var GalereyLength = this.fullGalerey.length;

    var UserGalereyMap = Galerey.slice(0, 8).map( function(user_galerey, index) {
      that.images.push(user_galerey.picture.url)
      return (
        <img className="avatar-Galerey" src={user_galerey.picture.url}
                                        width="35" height="35"
                                        key={index}
                                        style={{cursor: 'pointer'}}
                                        onClick={() => that.setState({ isOpen: true, photoIndex: index }) } />
      );
    });

    return (
      <div>
        <div className='Galerey'>
          <section id="Galerey-filed">
            <Link to={'/Galerey/' + this.props.userId + '/page/1'}>Galerey</Link>
            { GalereyLength > 0 ?
            <div id="Galerey_avatars">
              {UserGalereyMap}
            </div>
            : 'You not have Galerey' }
          </section>
        </div>
        {isOpen &&
          <Lightbox
              mainSrc={this.images[photoIndex]}
              nextSrc={this.images[(photoIndex + 1) % this.images.length]}
              prevSrc={this.images[(photoIndex + this.images.length - 1) % this.images.length]}

              onCloseRequest={() => {this.setState({ isOpen: false }), this.images=[] }}
              onMovePrevRequest={() => this.setState({
                  photoIndex: (photoIndex + this.images.length - 1) % this.images.length,
              })}
              onMoveNextRequest={() => this.setState({
                  photoIndex: (photoIndex + 1) % this.images.length,
              })}
          />
        }
      </div>
    );
  }
};
