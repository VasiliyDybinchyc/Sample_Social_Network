import React from 'react';
import { checkIfYourOnBottomPage, changeStatusModal } from '../../helper/helperFrontend';

export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = { end: 10};
  }

  handleScroll() {
    var stateEnd = this.state.end;
    if (checkIfYourOnBottomPage()) {
      this.setState({
        end: stateEnd + 10
      })
    }
  }

  componentDidMount() {
    this.Scroll = this.handleScroll.bind(this)
    window.addEventListener("scroll", this.Scroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.Scroll);
  }

  getImageUrl() {
    return this.urlImage;
  }

  testFunction(url){
    this.urlImage = url;
    changeStatusModal(!this.props.status)
  }

  render() {

  var FeedItems,
      FeedItemsLength = this.props.feed_items.length,
      end = this.state.end,
      that = this;
  if (FeedItemsLength > 0) {
    FeedItems = this.props.feed_items.slice(0, end).map( function(feed_item, index) {
        return (
          <div key={index}>
            <p>message id {feed_item.id} :</p>
            <p dangerouslySetInnerHTML={{__html: feed_item.content}} />
            {feed_item.picture.url == null ? null : < img src={feed_item.picture.url}
                                                      alt="lorem"
                                                      onClick={() => that.testFunction(feed_item.picture.url) } />}
          </div>
        );
      });
    } else {
      FeedItems = <p>"You don't have news"</p>
    }

    return (
      <div className="Feed">
        <h1>News</h1>
        <div id="News">
          <strong className={FeedItemsLength > 0 ? 'All-news-title':'none'}>All news: {FeedItemsLength}</strong>
          {FeedItems}
        </div>
      </div>
    );
  }
}
