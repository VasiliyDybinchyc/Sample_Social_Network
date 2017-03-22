import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class GalereyUser extends React.Component {

  componentWillMount(){
    this.fullGalerey = [];
    let there = this
    this.props.galerey_items.forEach( function(galerey, index) {
      return (
          galerey.picture.url == null ? null : there.fullGalerey.push(galerey)
      );
    });
  }

  render() {

  var start = 0,
      stop = 7

  for (var i = 1; i < this.props.pageNumber; i++) {
    start = start + 7;
    stop = stop + 7;
  }

  if (this.fullGalerey.length !== 0 || undefined) {

    var viewGalerey = this.fullGalerey.slice(start, stop).map( function(galerey, index) {
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
