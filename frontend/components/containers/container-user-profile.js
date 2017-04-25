import React                  from 'react';
import NProgress              from 'react-nprogress';

import PersonalInfoViews      from '../views/personal_info';
import FriendsViews           from '../views/user_friends';
import GalereyViews           from '../views/mini_galerey';
import NewsViews              from '../views/user_news';
import FriendButton           from '../views/friend_button';
import NotFriendButton        from '../views/not_friend_button';

import { connect }            from 'react-redux';
import { browserHistory }     from 'react-router';

import { getProfile,
         getCurrentUser }   from '../../axios/axios-user';

import { getNews,
         getNewsFriends }      from '../../axios/axios-news';

import { getFriends,
         checkIsThisUserIsFriend }    from '../../axios/axios-friend';

import { getGallerey }  from '../../axios/axios-gallerey';

import { checkReadyToRender,
         checkIsNotThisMyProfile,
         resetNewsGalereyFriendProfile } from '../../helper/helperFrontend';

import { Row,
         Col,
         ListGroup,
         ListGroupItem } from 'reactstrap';

const AnotherUserProfile = React.createClass({

  getInitialState: function() {
    return {notMyProfile: false};
  },

  componentWillMount: function() {
    resetNewsGalereyFriendProfile()
    this.updateProps(this.props.params.userId)
    NProgress.start()
  },

  updateProps: function(userId) {
      getCurrentUser()
      getProfile(userId)
      getGallerey(userId);
      getFriends(userId);
      checkIsThisUserIsFriend(userId)
      getNews(userId);
      getNewsFriends(userId)
      NProgress.done()
  },

  shouldComponentUpdate: function(){
    return this.notMyProfile(this.props.currentUserId)
  },

  componentDidMount: function() {
      NProgress.done()
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      resetNewsGalereyFriendProfile()
      this.updateProps(nextProps.params.userId)
    }
  },

  notMyProfile(id) {
    if (id == this.props.params.userId) {
      browserHistory.push('/profile')
      return false
    }else {
      this.setState({notMyProfile: true})
      return true
    }
  },

  render: function() {
    NProgress.done()
    return (
      <div>
        {this.props.render && this.state.notMyProfile &&
          <div id='Another_User_Profile'>
            <ListGroup>
              <ListGroupItem>
                <PersonalInfoViews  user={this.props.profile} />
              </ListGroupItem>
              <Row>
                <Col xs='4'>
                  <ListGroupItem>
                    <FriendsViews         user_friends={this.props.userFriends} userId={this.props.params.userId} />
                  </ListGroupItem>

                  <ListGroupItem>
                    <GalereyViews         user_galerey={this.props.userGalerey} userId={this.props.params.userId} />
                  </ListGroupItem>

                  {this.props.checkIsThisUserIsFriend == true ?
                    <NotFriendButton onSubmit={this.onSubmitNotFrend} userId={this.props.params.userId} /> :
                    <FriendButton    onSubmit={this.onSubmitFrend}    userId={this.props.params.userId} />
                  }

                </Col>
                <Col xs='8'>
                  <ListGroupItem style={{background: '#f7f7f7'}}>
                    <NewsViews feed_items={this.props.newsList} Id={this.props.profile.id} user_friends={this.props.newsFriend} user={this.props.profile} />
                  </ListGroupItem>
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
    currentUserId: store.sessionState.sessions.id,
    profile: store.userState.userProfile,
    newsFriend: store.newsState.newsFriend,
    userGalerey: store.gallereyState.gallerey,
    userFriends: store.friendsState.userFriends,
    checkIsThisUserIsFriend: store.friendsState.checkIsThisUserIsFriend,
    newsList: store.newsState.news,
    render: store.globalState.render = checkReadyToRender( store.userState.userProfile,
                                                            store.gallereyState.gallerey,
                                                            store.friendsState.userFriends,
                                                            store.friendsState.checkIsThisUserIsFriend,
                                                            store.newsState.news,
                                                            store.friendsState.userFriends)
  };
};

export default connect(mapStateToProps)(AnotherUserProfile);
