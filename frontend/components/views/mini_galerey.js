import React from 'react';
import { Link } from 'react-router';


export default class Galerey extends React.Component{

  constructor(props) {
    super(props);
    this.state = { photoIndex: 0,
                   isOpen: false};
  }

  componentWillMount(){
    this.images = []
    this.cnahgeImage(this.props.user_galerey)
  }

  componentWillReceiveProps(nextProps) {
    this.cnahgeImage(nextProps.user_galerey)
  }

  cnahgeImage(props){

    const {
        photoIndex,
        isOpen,
    } = this.state;

    this.UserGalereyMap = props.slice(0, 8).map( function(user_galerey, index) {
      return (
        <img className="avatar-Galerey" src={user_galerey.picture.url}
                                        width="35" height="35"
                                        key={index}
                                        style={{cursor: 'pointer'}}
                                        onClick={() => that.setState({ isOpen: true, photoIndex: index }) } />
      );
    });
  }

  render() {
    return (
      <div>
        <div className='Galerey'>
          <section id="Galerey-filed">
            <Link to={'/Galerey/' + this.props.userId + '/page/1'}>Galerey</Link>
            { this.props.user_galerey.length > 0 ?
            <div id="Galerey_avatars">
              {this.UserGalereyMap}
            </div>
            : 'You not have Galerey' }
          </section>
        </div>

      </div>
    );
  }
};
