import   React                from 'react';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
import    * as axiosNews      from '../../axios/axios-news';
import    * as axiosGallerey  from '../../axios/axios-gallerey';
import   FullGalereyViews     from '../views/galerey_user';
import   PaginationView           from '../views/pagination';
import   NProgress            from 'react-nprogress';

import { checkReadyToRender } from '../../helper/helperFrontend';

const Galerey = React.createClass({

  componentWillMount: function() {
    NProgress.start();  
    this.updateProps()
  },

  updateProps: function() {
    axiosGallerey.getGallerey(this.props.params.userId,
                              this.props.params.pageNumber);
  },

  componentDidMount: function() {
    NProgress.done()
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.pageNumber !== nextProps.params.pageNumber) {
      axiosGallerey.getGallerey(this.props.params.userId,
                                nextProps.params.pageNumber);
    }
  },

  render: function() {
    console.log(this.props.allAmount)
    console.log(this.props.galere)
    return(
      <div>
        {this.props.render &&
          <div className="Full galerey">
            <PaginationView pageNumber={this.props.params.pageNumber} userId={this.props.params.userId} paginationFor={'galerey'} amountElement={this.props.allAmount} />
            <h1>Full Galerey</h1>
            <FullGalereyViews galerey_items={this.props.galere} pageNumber={this.props.params.pageNumber} />
          </div>
        }
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    galere: store.gallereyState.gallerey,
    allAmount: store.gallereyState.allAmount,
    render: store.sessionState.render = checkReadyToRender(store.gallereyState.gallerey,
                                                           store.gallereyState.allAmount)
  };
};

export default connect(mapStateToProps)(Galerey);
