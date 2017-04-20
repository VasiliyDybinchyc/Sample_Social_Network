import React from 'react';

import { Link } from 'react-router';

import { ListGroup, ListGroupItem } from 'reactstrap';


export default class GalereyUser extends React.Component {

  componentWillMount(){
    this.cnahgeImage(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.cnahgeImage(nextProps)
  }

  cnahgeImage(props){
    if (props.galerey_items.length !== 0 || undefined) {

      this.viewGalerey = props.galerey_items.map( function(galerey, index) {
          return (
            <div key={index}>
              <ListGroupItem> <img src={galerey.picture.url} alt="lorem" style={{maxWidth: 1070}} /> </ListGroupItem>
            </div>
          );
        });
      } else {
        this.viewGalerey = <p>"You don't have picture in galerey"</p>
      }
  }

  render() {
    return (
      <div className="Feed">
        <h1>Galerey</h1>
        <div id="Galerey">
          <ListGroup>
            {this.viewGalerey}
          </ListGroup>
        </div>
      </div>
    );
  }
}
