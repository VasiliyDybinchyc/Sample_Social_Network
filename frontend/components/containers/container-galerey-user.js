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
    var Id = this.props.params.userId
    NProgress.start();
    axiosGallerey.getGallerey(Id);
  },

  componentDidMount: function() {
    NProgress.done()
  },

  render: function() {
    return(
      <div>
        {this.props.render &&
          <div className="Full galerey">
            <PaginationView pageNumber={this.props.params.pageNumber} paginationFor={'galerey'} amountElement={this.props.galere} />
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
    render: store.sessionState.render = checkReadyToRender( store.newsState.onlyUserNews,
                                                            store.gallereyState.gallerey)
  };
};

export default connect(mapStateToProps)(Galerey);
