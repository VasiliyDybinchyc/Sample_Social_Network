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
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

import NProgress from 'react-nprogress';

const CurrentUserProfile = React.createClass({

  updateProps: function() {
    var Id = this.props.user.id;
    axiosUser.getCurrentUser().then(function () {
      NProgress.set(0.3);
      axiosGallerey.getGallerey(Id);
    }).then(function () {
      axiosFriend.getFriends(Id);
    }).then(function () {
      NProgress.set(0.7);
      axiosNews.getNews(Id);
    })
  },

  getInitialState: function() {
    return {
      render: false
    };
  },

  componentWillMount: function() {
    NProgress.start();
    this.updateProps();
  },

  checkReadyToRender: function() {
    if (this.props.userFriends !== undefined &&
        this.props.userGalerey !== undefined &&
        this.props.newsList !== undefined) {
          NProgress.done()
          this.setState({render: true})
        }
  },

  render: function() {

    return(
        <div>
        {this.state.render == false ? this.checkReadyToRender() :
          <ListGroup>
              <ListGroupItem> <PersonalInfoViews  user={this.props.user} />                 </ListGroupItem>
            <Row>
              <Col xs='4'>
                <ListGroupItem > <FriendsViews       user_friends={this.props.userFriends} />  </ListGroupItem>
                <ListGroupItem > <GalereyViews       user_galerey={this.props.userGalerey} />  </ListGroupItem>
                <ListGroupItem > <FormGalletey       userId={this.props.user.id}  />           </ListGroupItem>
                <ListGroupItem > <FormPost           userId={this.props.user.id} />            </ListGroupItem>
              </Col>

              <Col xs='8'>
                <ListGroupItem >
                  <NewsViews userId={this.props.user.id} feed_items={this.props.newsList} />
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
    user: store.userState.currentUser,
    userFriends: store.friendsState.userFriends,
    userGalerey: store.gallereyState.gallerey,
    newsList: store.newsState.news,
  };
};

export default connect(mapStateToProps)(CurrentUserProfile);
