var News = React.createClass({

  getInitialState: function() {
    return {
      message: "not at bottom",
      end: 10,
    };
  },

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.setState({
        message:'bottom reached',
        end: end + 10
      })

    } else {
      this.setState({
        message:'not at bottom'
      });
    }
  },

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  render: function() {

  FeedItemsLength = this.props.feed_items.length;

  end = this.state.end

  if (FeedItemsLength > 0) {
    FeedItems = this.props.feed_items.slice(0, end).map( function(feed_item, index) {
        return (
          <div key={index} onScroll={this.handleScroll}>
            <p>message id {feed_item.id} :</p>
            <p>{feed_item.content}</p>
          </div>
        );
      });
    } else {
      FeedItems = <p>К сожалению новостей нет</p>
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
});
