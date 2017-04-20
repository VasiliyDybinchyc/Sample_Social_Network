import React from 'react';

import { browserHistory } from 'react-router';

import { Pagination,
         PaginationItem,
         PaginationLink } from 'reactstrap';


export default class PaginationView extends React.Component {

  componentWillMount(){
    var amountElement = 0
    if (this.props.paginationFor == "galerey") {
      this.amountPagination = Math.ceil(this.props.amountElement / 8)
    }
    this.viewPaginations()
  }

  componentWillReceiveProps() {
    this.viewPaginations()
  }

  changePostion(){
    this.position = [,,,,,]

    let defaultPosition = [1, 2, 3, 4, 5];

    if (this.props.pageNumber <= 3){
      this.position = defaultPosition
    }
    else if (Math.round(this.amountPagination) - Math.round(this.props.pageNumber) <= 2)
    {
      if (this.position[4] !== this.amountPagination){
        for (let i = 0; i < this.position.length; i++) {
          this.position[i] = this.amountPagination - 4 + i
        }
      }
    }
    else {
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

  endPagination(previousPage){
    if (previousPage > this.amountPagination || previousPage < 1){
      return true
    }
  }

  viewPaginations() {
    this.changePostion()

    this.nextPage = Number(this.props.pageNumber) + 1,
    this.previousPage = Number(this.props.pageNumber) - 1;

    this.viewPagination = []

    for (let i = 0; i < this.viewAmountPagination(); i++){
      this.viewPagination.push(

        <PaginationItem key={i + ' key PaginationItem'}>
          <PaginationLink onClick={() => browserHistory.push('/Galerey/' + this.props.userId + '/page/' + this.position[i] )} >
            {this.position[i]}
          </PaginationLink>
        </PaginationItem>

      )
    }
  }

  render() {
    return (
      <Pagination>
        <PaginationItem disabled={this.endPagination(this.previousPage)}>
          <PaginationLink previous onClick={() => browserHistory.push('/Galerey/' + this.props.userId + '/page/' + this.previousPage)} />
        </PaginationItem>

        {this.viewPagination}

        <PaginationItem disabled={this.endPagination(this.nextPage)}>
          <PaginationLink next onClick={() => browserHistory.push('/Galerey/' + this.props.userId + '/page/' + this.nextPage)} />
        </PaginationItem>
      </Pagination>
    );
  }
}
