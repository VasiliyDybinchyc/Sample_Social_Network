import React                  from 'react';
import { connect }            from 'react-redux';
import  { browserHistory, Link }    from 'react-router';
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

import { checkReadyToRender, checkIsNotThisMyProfile } from '../../helper/helperFrontend';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';

const AnotherUserProfile = React.createClass({

  componentWillMount: function() {
    let that = this
    axiosUser.getCurrentUser().then(function () {
      if (checkIsNotThisMyProfile(that.props.userId, that.props.params.userId)) {
        browserHistory.push('/profile')
      }
      that.updateProps(that.props.params.userId)
    });
  },

  updateProps: function(userId) {
    axiosUser.getProfile(userId).then(function () {
      NProgress.set(0.3);
      axiosGallerey.getGallerey(userId);
    }).then(function () {
      axiosFriend.getFriends(userId);
    }).then(function () {
      NProgress.set(0.7);
      axiosFriend.checkIsThisUserIsFriend(userId)
      axiosNews.getNews(userId);

      NProgress.done()
    })
  },

  componentDidMount: function() {
      NProgress.done()
    },

  componentWillReceiveProps(nextProps) {
    if (nextProps.params != this.props.params) {
      if (checkIsNotThisMyProfile(this.props.userId, nextProps.params.userId)) {
        browserHistory.push('/profile')
      }
      this.updateProps(this.props.params.userId)
    }
  },

  render: function() {
    return (
      <div>
        {this.props.render &&
          <div id='Another_User_Profile'>
            <ListGroup>
              <ListGroupItem> <PersonalInfoViews    user={this.props.profile} />                 </ListGroupItem>
              <Row>
                <Col xs='4'>
                  <ListGroupItem>
                    <FriendsViews         user_friends={this.props.userFriends} />
                  </ListGroupItem>

                  <ListGroupItem>
                    <GalereyViews         user_galerey={this.props.userGalerey.concat(this.props.newsList)} />
                    <Link to={"/Galerey/" + this.props.profile.id} activeClassName="active">Full {this.props.profile.first_name} Galerey</Link>
                  </ListGroupItem>

                  {this.props.checkIsThisUserIsFriend == true ?
                    <NotFriendButton onSubmit={this.onSubmitNotFrend} userId={this.props.params.userId} /> :
                    <FriendButton    onSubmit={this.onSubmitFrend}    userId={this.props.params.userId} />
                  }

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
    userId: store.userState.currentUser.id,
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
