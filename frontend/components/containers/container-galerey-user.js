import   React                from 'react';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
import    * as axiosNews      from '../../axios/axios-news';
import    * as axiosGallerey  from '../../axios/axios-gallerey';
import   FullGalereyViews          from '../views/galerey_user';


const Galerey = React.createClass({

  componentWillMount: function() {
    var Id = this.props.params.userId

    axiosGallerey.getGallerey(Id);
    axiosNews.getOnlyUserNews(Id);
  },

  render: function() {
    return(
      <div className="Full galerey">
        <h1>Full Galerey</h1>
        <FullGalereyViews news_items={this.props.newsList} galerey_items={this.props.galere} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    newsList: store.newsState.onlyUserNews,
    galere: store.gallereyState.gallerey
  };
};

export default connect(mapStateToProps)(Galerey);
