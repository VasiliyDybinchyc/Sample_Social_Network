import React from 'react';
import { checkIfYourOnBottomPage, changeStatusModal } from '../../helper/helperFrontend';

import Lightbox from 'react-image-lightbox';

export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = { end: 10,
                   photoIndex: 0,
                   isOpen: false};
  }

  componentWillMount(){
    this.images = []
  }

  handleScroll() {
    var stateStart = this.state.start;
    var stateEnd = this.state.end;
    if (checkIfYourOnBottomPage()) {
      this.setState({
        end: stateEnd + 10,
        start: stateStart + 10
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

  render() {

    const {
               photoIndex,
               isOpen,
           } = this.state;

  var FeedItems,
      FeedItemsLength = this.props.feed_items.length,
      start = this.state.start,
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
                                                      style={{maxWidth: 690}}
                                                      onClick={() => {that.images.push(feed_item.picture.url, null), that.setState({ isOpen: true }) } } /> }
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

          {isOpen &&
            <Lightbox
                mainSrc={this.images[photoIndex]}
                nextSrc={this.images[(photoIndex + 1) % this.images.length]}
                prevSrc={this.images[(photoIndex + this.images.length - 1) % this.images.length]}

                onCloseRequest={() => {this.setState({ isOpen: false }), this.images=[] }}
                onMovePrevRequest={() => this.setState({
                    photoIndex: (photoIndex + this.images.length - 1) % this.images.length,
                })}
                onMoveNextRequest={() => this.setState({
                    photoIndex: (photoIndex + 1) % this.images.length,
                })}
            />
          }
        </div>
      </div>
    );
  }
}
