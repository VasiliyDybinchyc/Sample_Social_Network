import React from 'react';
import { Link } from 'react-router';

export default class Galerey extends React.Component{


  render() {
    this.fullGalerey = [];
    let there = this
    this.props.user_galerey.forEach( function(galerey, index) {
      return (
          galerey.picture.url == null ? null : there.fullGalerey.push(galerey)
      );
    });

    var Galerey = this.fullGalerey

    var GalereyLength = this.fullGalerey.length;

    var UserGalereyMap = Galerey.slice(0, 8).map( function(user_galerey, index) {
      return (
        <img className="avatar-Galerey" src={user_galerey.picture.url} width="35" height="35" key={index} />
      );
    });

    return (
      <div>
        <div className='Galerey'>
          <section id="Galerey-filed">
            <Link to={'/allFrend/' + this.props.userId}>Galerey</Link>
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
