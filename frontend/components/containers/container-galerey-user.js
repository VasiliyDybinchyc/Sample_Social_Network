import   React                from 'react';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
import    * as axiosNews      from '../../axios/axios-news';
import    * as axiosGallerey  from '../../axios/axios-gallerey';
import   FullGalereyViews     from '../views/galerey_user';
import   NProgress            from 'react-nprogress';

import { checkReadyToRender } from '../../helper/helperFrontend';

const Galerey = React.createClass({

  componentWillMount: function() {
    var Id = this.props.params.userId
    NProgress.start();
    axiosGallerey.getGallerey(Id);
    axiosNews.getOnlyUserNews(Id);
  },
  
  componentDidMount: function() {
    NProgress.done()
  },

  render: function() {
    return(
      <div>
        {this.props.render == false ? null :
          <div className="Full galerey">
            <h1>Full Galerey</h1>
            <FullGalereyViews news_items={this.props.newsList} galerey_items={this.props.galere} />
          </div>
        }
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    newsList: store.newsState.onlyUserNews,
    galere: store.gallereyState.gallerey,
    render: store.sessionState.render = checkReadyToRender( store.newsState.onlyUserNews,
                                                            store.gallereyState.gallerey)
  };
};

export default connect(mapStateToProps)(Galerey);
