import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class GalereyUser extends React.Component {

  render() {
  if (this.props.galerey_items.length !== 0 || undefined) {

    var viewGalerey = this.props.galerey_items.map( function(galerey, index) {
        return (
          <div key={index}>
            <ListGroupItem> <img src={galerey.picture.url} alt="lorem" style={{maxWidth: 1070}} /> </ListGroupItem>
          </div>
        );
      });
    } else {
      var viewGalerey = <p>"You don't have picture in galerey"</p>
    }

    return (
      <div className="Feed">
        <h1>Galerey</h1>
        <div id="Galerey">
          <ListGroup>
            {viewGalerey}
          </ListGroup>
        </div>
      </div>
    );
  }
}
