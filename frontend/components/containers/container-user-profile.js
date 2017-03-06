import React                  from 'react';
import { connect }            from 'react-redux';
import  { Link }              from 'react-router';
import NProgress              from 'react-nprogress';
import PersonalInfoViews      from '../views/personal_info';
import FriendsViews           from '../views/user_friends';
import GalereyViews           from '../views/mini_galerey';
import NewsViews              from '../views/user_news';
import FriendButton           from '../views/friend_button';
import NotFriendButton        from '../views/not_friend_button';
import   * as axiosUser       from '../../axios/axios-user';
import    * as axiosNews      from '../../axios/axios-news';
import    * as axiosFriend    from '../../axios/axios-friend';
import    * as axiosGallerey  from '../../axios/axios-gallerey';

import { checkReadyToRender } from '../../helper/helperFrontend';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

const AnotherUserProfile = React.createClass({

  componentWillMount: function() {
    let userId = this.props.params.userId
    NProgress.start();
    axiosUser.getProfile(userId)
    axiosGallerey.getGallerey(userId)
    axiosFriend.getFriends(userId)
    axiosFriend.checkIsThisUserIsFriend(userId)
    axiosNews.getNews(userId)
  },

  componentDidMount: function() {
      NProgress.done()
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
        {this.props.render == false ? null:
          <div id='Another_User_Profile'>
            <ListGroup>
              <ListGroupItem> <PersonalInfoViews    user={this.props.profile} />                 </ListGroupItem>
              <Row>
                <Col xs='4'>
                  <ListGroupItem> <FriendsViews         user_friends={this.props.userFriends} />      </ListGroupItem>
                  <ListGroupItem> <GalereyViews         user_galerey={this.props.userGalerey} />      </ListGroupItem>
                  {this.props.checkIsThisUserIsFriend == true ?
                    <NotFriendButton onSubmit={this.onSubmitNotFrend} userId={this.props.params.userId} /> :
                    <FriendButton    onSubmit={this.onSubmitFrend}    userId={this.props.params.userId} />
                  }
                  <Link to={"/allFrend/" + this.props.profile.id} activeClassName="active">All {this.props.profile.first_name} friend</Link>

                  <Link to={"/Galerey/" + this.props.profile.id} activeClassName="active">Full {this.props.profile.first_name} Galerey</Link>
                </Col>
                <Col xs='8'>
                  <ListGroupItem> <NewsViews            feed_items={this.props.newsList} />      </ListGroupItem>
                </Col>
              </Row>
            </ListGroup>
          </div>
        }
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
    render: store.sessionState.render = checkReadyToRender( store.userState.userProfile,
                                                            store.gallereyState.gallerey,
                                                            store.friendsState.userFriends,
                                                            store.friendsState.checkIsThisUserIsFriend,
                                                            store.newsState.news)
  };
};

export default connect(mapStateToProps)(AnotherUserProfile);
