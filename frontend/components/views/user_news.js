import React from 'react';

export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = { end: 10};

  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        this.setState({
          message:'bottom reached',
          end: this.state.end + 10
        })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  render() {


  var FeedItems,
      FeedItemsLength = this.props.feed_items.length,
      end = this.state.end;

  if (FeedItemsLength > 0) {
    FeedItems = this.props.feed_items.slice(0, end).map( function(feed_item, index) {
        return (
          <div key={index}>
            <p>message id {feed_item.id} :</p>
            <p dangerouslySetInnerHTML={{__html: feed_item.content}} />
            {feed_item.picture.url == null ? null : <img src={feed_item.picture.url} alt="lorem" />}
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
