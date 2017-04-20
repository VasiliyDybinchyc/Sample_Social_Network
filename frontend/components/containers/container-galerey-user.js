import   React                 from 'react';
import   NProgress             from 'react-nprogress';

import   PaginationView        from '../views/pagination';
import   FullGalereyViews      from '../views/galerey_user';

import { connect }             from 'react-redux';

import { getGallerey }         from '../../axios/axios-gallerey';

import { checkReadyToRender }  from '../../helper/helperFrontend';


const Galerey = React.createClass({

  componentWillMount: function() {
    NProgress.start();
    this.updateProps()

  },

  updateProps: function() {
    getGallerey(this.props.params.userId,
                this.props.params.pageNumber);
  },

  componentDidMount: function() {
    NProgress.done()
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.pageNumber !== nextProps.params.pageNumber)
    {
      getGallerey(this.props.params.userId,
                  nextProps.params.pageNumber);
    }
    else if (this.props.params.userId !== nextProps.params.userId)
    {
      getGallerey(nextProps.params.userId,
                  nextProps.params.pageNumber);
    }
  },

  render: function() {
    return(
      <div>
        {this.props.render &&
          <div className="Full galerey">
            <PaginationView pageNumber={this.props.params.pageNumber}
                            userId={this.props.params.userId}
                            paginationFor={'galerey'}
                            amountElement={this.props.allAmount} />
            <h1>Full Galerey</h1>
            <FullGalereyViews galerey_items={this.props.gallerey}
                              pageNumber={this.props.params.pageNumber} />
          </div>
        }
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    gallerey: store.gallereyState.gallerey,
    allAmount: store.gallereyState.allAmount,

    render: store.globalState.render = checkReadyToRender(store.gallereyState.gallerey,
                                                           store.gallereyState.allAmount)
  };
};

export default connect(mapStateToProps)(Galerey);
