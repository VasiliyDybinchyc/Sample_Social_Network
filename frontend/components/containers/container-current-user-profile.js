import    React              from 'react';
import    NProgress          from 'react-nprogress';

import    FormPost           from '../views/form_post';
import    NewsViews          from '../views/user_news';
import    FriendsViews       from '../views/user_friends';
import    GalereyViews       from '../views/mini_galerey';
import    FormGalletey       from '../views/form_gallerey';
import    PersonalInfoViews  from '../views/personal_info';

import  { connect }          from 'react-redux';

import  { getFriends }       from '../../axios/axios-friend';
import  { getGallerey }      from '../../axios/axios-gallerey';
import  { getCurrentUser }   from '../../axios/axios-user';
import  { getNews,
          getNewsFriends }   from '../../axios/axios-news';

import { Row,
         Col,
         ListGroup,
         ListGroupItem } from 'reactstrap';

import { checkReadyToRender,
         resetNewsGalereyFriendProfile }                 from '../../helper/helperFrontend';


const CurrentUserProfile = React.createClass({

  componentWillMount: function() {
    NProgress.start();
    resetNewsGalereyFriendProfile()
    getCurrentUser()
  },

  updateProps: function(id) {
    getGallerey(id)
    getFriends(id)
    getNewsFriends(id)
    getNews(id)

    NProgress.done()
  },

  componentWillReceiveProps: function() {
    if (Array.isArray(this.props.user) == false && this.oneTimeUpdate == undefined){
      this.oneTimeUpdate = this.oneTimeUpdate + 1
      this.updateProps(this.props.user.id)
    }
  },

  render: function() {
    return(
        <div>
          {this.props.render &&
            <ListGroup>
                <ListGroupItem>
                  <PersonalInfoViews  user={this.props.user} />
                </ListGroupItem>
              <Row>
                <Col xs='4'>
                  <ListGroupItem >
                    <FriendsViews      user_friends={this.props.userFriends}
                                       userId={this.props.user.id} />
                  </ListGroupItem>

                  <ListGroupItem >
                    <GalereyViews      user_galerey={this.props.userGalerey}
                                       userId={this.props.user.id}/>
                  </ListGroupItem>

                  <ListGroupItem >
                    <FormGalletey      userId={this.props.user.id}  />
                  </ListGroupItem>

                  <ListGroupItem >
                    <FormPost          userId={this.props.user.id} />
                  </ListGroupItem>
                </Col>

                <Col xs='8'>
                  <ListGroupItem style={{background: '#f7f7f7'}}>
                    <NewsViews  feed_items={this.props.newsList}
                                Id={this.props.user.id}
                                user_friends={this.props.newsFriend}
                                user={this.props.user} />
                  </ListGroupItem>
                </Col>
              </Row>
            </ListGroup>
          }
        </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    newsList: store.newsState.news,
    user: store.sessionState.sessions,
    newsFriend: store.newsState.newsFriend,
    apenedNews: store.newsState.apenedNews,
    userGalerey: store.gallereyState.gallerey,
    userFriends: store.friendsState.userFriends,

    render: store.globalState.render = checkReadyToRender(store.newsState.news,
                                                          store.newsState.newsFriend,
                                                          store.sessionState.sessions,
                                                          store.gallereyState.gallerey,
                                                          store.friendsState.userFriends)
  };
};

export default connect(mapStateToProps)(CurrentUserProfile);
