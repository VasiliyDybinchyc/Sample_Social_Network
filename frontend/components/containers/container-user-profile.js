import React                from 'react';
import { connect }          from 'react-redux';
import  { Link }            from 'react-router';
import PersonalInfoViews    from '../views/personal_info';
import FriendsViews         from '../views/user_friends';
import GalereyViews         from '../views/mini_galerey';
import NewsViews            from '../views/user_news';
import FriendButton         from '../views/friend_button';
import NotFriendButton      from '../views/not_friend_button';
import   * as axiosUser     from '../../axios/axios-user';
import    * as axiosNews    from '../../axios/axios-news';
import    * as axiosFriend  from '../../axios/axios-friend';
import    * as axiosGallerey  from '../../axios/axios-gallerey';

const AnotherUserProfile = React.createClass({

  componentWillMount: function() {
    let userId = this.props.params.userId
    axiosUser.getProfile(userId)
    axiosGallerey.getGallerey(userId)
    axiosFriend.getFriends(userId)
    axiosFriend.checkIsThisUserIsFriend(userId)
    axiosNews.getNews(userId)
  },

  componentWillReceiveProps(nextProps) {

    if (nextProps.params != this.props.params) {
      let userId = nextProps.params.userId;
      axiosUser.getProfile(userId)
      axiosGallerey.getGallerey(userId)
      axiosFriend.getFriends(userId)
      axiosFriend.checkIsThisUserIsFriend(userId)
      axiosNews.getNews(userId)
    }
  },

  render: function() {
    return (
      <div>
        {this.props.checkIsThisUserIsFriend == true ?
          <NotFriendButton onSubmit={this.onSubmitNotFrend} userId={this.props.params.userId} /> :
          <FriendButton    onSubmit={this.onSubmitFrend}    userId={this.props.params.userId} />
        }
        <PersonalInfoViews    user={this.props.profile} />
        <FriendsViews         user_friends={this.props.userFriends} />
        <Link to={"/allFrend/" + this.props.profile.id} activeClassName="active">All {this.props.profile.first_name} friend</Link>
        <GalereyViews         user_galerey={this.props.userGalerey} />
        <Link to={"/Galerey/" + this.props.profile.id} activeClassName="active">Full {this.props.profile.first_name} Galerey</Link>
        <NewsViews            feed_items={this.props.newsList} />
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile,
    userGalerey: store.gallereyState.gallerey,
    userFriends: store.friendsState.userFriends,
    checkIsThisUserIsFriend: store.friendsState.checkIsThisUserIsFriend,
    newsList: store.newsState.news,
  };
};

export default connect(mapStateToProps)(AnotherUserProfile);
