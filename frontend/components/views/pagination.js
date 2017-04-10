import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { browserHistory } from 'react-router';

export default class PaginationView extends React.Component {

  endPagination(something){
    if (something > this.amountPagination || something < 1){
      return true
    }
  }

  componentWillMount(){
    var amountElement = 0
    if (this.props.paginationFor == "galerey") {
      this.amountPagination = Math.ceil(this.props.amountElement / 8)
    }
  }

  changePostion(){
    this.position = [,,,,,]
    let defaultPosition = [1, 2, 3, 4, 5];
    if (this.props.pageNumber <= 3) {
      this.position = defaultPosition
    }else if (Math.round(this.amountPagination) - Math.round(this.props.pageNumber) <= 2){
      if (this.position[4] !== this.amountPagination){
        for (let i = 0; i < this.position.length; i++) {
          this.position[i] = this.amountPagination - 4 + i
        }
      }
    }else {
      for (let i = 0; i < this.position.length; i++) {
        this.position[i] = Number(this.props.pageNumber) - 2 + i
      }
    }
  }

  viewAmountPagination() {
    if (this.amountPagination < 5){
      return this.amountPagination
    }
    else{
      return 5
    }
  }

  render() {
    this.changePostion()

    var nextPage = Number(this.props.pageNumber) + 1,
        previousPage = Number(this.props.pageNumber) - 1;

    var viewPagination = []
    for (let i = 0; i < this.viewAmountPagination(); i++){
      viewPagination.push(
        <PaginationItem key={i + ' key PaginationItem'}>
          <PaginationLink onClick={() => browserHistory.push('/Galerey/' + this.props.userId + '/page/' + this.position[i] )} >
            {this.position[i]}
          </PaginationLink>
        </PaginationItem>)
    }

    return (
      <Pagination>
        <PaginationItem disabled={this.endPagination(previousPage)}>
          <PaginationLink previous onClick={() => browserHistory.push('/Galerey/11/page/' + previousPage)} />
        </PaginationItem>
        {viewPagination}
        <PaginationItem disabled={this.endPagination(nextPage)}>
          <PaginationLink next onClick={() => browserHistory.push('/Galerey/11/page/' + nextPage)} />
        </PaginationItem>
      </Pagination>
    );
  }
}
