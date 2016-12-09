import React from 'react';
import { Link } from 'react-router';

export default class Galerey extends React.Component{
  render() {
    var Galerey = this.props.user_galerey

    var GalereyLength = this.props.user_galerey.length;

    var UserGalereyMap = Galerey.map( function(user_galerey, index) {
        return (
          <img className="avatar-Galerey" src={user_galerey.picture.url} width="35" height="35" key={index} />
        );
      });

    return (
      <div>
        <div className='Galerey'>
          <section id="Galerey-filed">
            <h3 id="title-Galerey-filed">My Galerey</h3>
            { GalereyLength > 0 ?
            <div id="Galerey_avatars">
              {UserGalereyMap}
            </div>
            : 'You not have Galerey' }
          </section>
        </div>
      </div>
    );
  }
};
