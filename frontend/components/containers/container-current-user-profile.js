import    React               from 'react';
import  { connect }           from 'react-redux';
import  { Link }              from 'react-router';
import    PersonalInfoViews   from '../views/personal_info';
import    FriendsViews        from '../views/user_friends';
import    GalereyViews        from '../views/mini_galerey';
import    NewsViews           from '../views/user_news';
import    FormPost            from '../views/form_post';
import    FormGalletey        from '../views/form_gallerey';
import    * as axiosNews      from '../../axios/axios-news';
import    * as axiosFriend    from '../../axios/axios-friend';
import    * as axiosUser      from '../../axios/axios-user';
import    * as axiosGallerey  from '../../axios/axios-gallerey';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CurrentUserProfile = React.createClass({

  componentWillMount: function() {
    var Id = this.props.user.id;

    axiosGallerey.getGallerey(Id);
    axiosUser.getCurrentUser();
    axiosFriend.getFriends(Id);
    axiosNews.getNews(Id);
  },

  render: function() {
    return(
      <div>
        <ListGroup>
          <ListGroupItem> <PersonalInfoViews  user={this.props.user} />                 </ListGroupItem>
          <ListGroupItem> <FriendsViews       user_friends={this.props.userFriends} />  </ListGroupItem>
          <ListGroupItem> <GalereyViews       user_galerey={this.props.userGalerey} />  </ListGroupItem>
          <ListGroupItem> <FormGalletey       userId={this.props.user.id}  />           </ListGroupItem>
          <ListGroupItem> <FormPost           userId={this.props.user.id} />            </ListGroupItem>
          <ListGroupItem> <NewsViews          feed_items={this.props.newsList} />       </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    user: store.userState.currentUser,
    userFriends: store.friendsState.userFriends,
    userGalerey: store.gallereyState.gallerey,
    newsList: store.newsState.news,
  };
};

export default connect(mapStateToProps)(CurrentUserProfile);
