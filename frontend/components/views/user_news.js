import React      from 'react';
import NProgress  from 'react-nprogress';

import { Link }   from 'react-router';

import { getMoreNews,
         getNewsFriends }     from '../../axios/axios-news';

import { ListGroup,
         ListGroupItem,
         ListGroupItemHeading } from 'reactstrap';

import { fourSpaces,
         checkIfYourOnBottomPage } from '../../helper/helperFrontend';




export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = { end: 30 };
  }

  componentWillMount(){
    const { photoIndex,
            isOpen,
           } = this.state;

    this.Done = false
    this.images = []

    this.tamlplateFeedItems(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.tamlplateFeedItems(nextProps)
  }

  handleScroll() {
    var stateStart = this.state.start;
    var stateEnd = this.state.end;
    if (checkIfYourOnBottomPage() && this.props.feed_items.length >= stateEnd && this.Done == false) {
      this.setState({
        end: stateEnd + 30,
        start: stateStart + 30
      }),
      NProgress.start()
      getNewsFriends(this.props.Id).then(() => {
        getMoreNews(this.props.Id)
      })
      this.Done = true
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.feed_items !== prevProps.feed_items) {
      this.Done = false
      NProgress.done()
    }
  }

  componentDidMount() {
    this.Scroll = this.handleScroll.bind(this)
    window.addEventListener("scroll", this.Scroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.Scroll);
  }

  getRightUser(array, id) {
    if(array[0] == undefined) return false;
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == id){
        return array[i]
      }
    }
    return false
  }

  tamlplateFeedItems(props){
    let that = this;

    if (props.feed_items.length > 0) {
      this.FeedItems = props.feed_items.slice(0, this.state.end).map( function(feed_item, index) {
          return (
            <ListGroupItem key={index} style={{width: 690}}>
              <ListGroupItemHeading>

                <Link to={"/users/" + feed_item.user_id} key={index} className="avatar-frend" >
                  <img src={that.getRightUser(that.props.user_friends, feed_item.user_id).croppersAvatar == undefined ?
                            that.props.user.croppersAvatar.url :
                            that.getRightUser(that.props.user_friends, feed_item.user_id).croppersAvatar.url }
                            width="35" height="35" />
                </Link>

                <p>{that.getRightUser(that.props.user_friends, feed_item.user_id).first_name || that.props.user.first_name} {" "}
                   {that.getRightUser(that.props.user_friends, feed_item.user_id).last_name || that.props.user.last_name} say :</p>
              </ListGroupItemHeading>

                <p style={{width: 690}} dangerouslySetInnerHTML={{__html: feed_item.content}} />


              {feed_item.picture.url && < img src={feed_item.picture.url}
                                              alt="lorem"
                                              style={{maxWidth: 690}, {cursor: 'pointer'}}
                                              onClick={() => {that.images.push(feed_item.picture.url, null), that.setState({ isOpen: true }) } } /> }
            </ListGroupItem>
          );
        });
      } else {
        this.FeedItems = <p>"You don't have news"</p>
      }
  }

  render() {
    return (
      <div className="Feed">
        <h1>News</h1>
        <div id="News">
        <ListGroup>
          {this.FeedItems}
        </ListGroup>
        </div>
      </div>
    );
  }
}
