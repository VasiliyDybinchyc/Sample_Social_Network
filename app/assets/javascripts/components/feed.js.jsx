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

var AllFrend = React.createClass({

  render: function() {
    AllFrends = this.props.user_frends

    AllFrendsLength = this.props.user_frends.length;

    UserAllFrendsMap = AllFrends.map( function(all_user_frends, index) {
        return (
        <div key={index} id={"all-frend-user-"+all_user_frends.id}>
          <p>{all_user_frends.first_name} {all_user_frends.last_name}</p>
          <a href={"/users/" + all_user_frends.id} className="avatar-frend" >
            <img className="avatar-frend" src={all_user_frends.avatar.url}></img>
          </a>
        </div>
        );
      });

    return (
      <div>
        <div className='Feed'>
          <section>
            <h2>All my frend</h2>
            { AllFrendsLength > 0 ?
            <div>
              {UserAllFrendsMap}
            </div>
            : 'You not have frend' }
          </section>
        </div>
      </div>
    );
  }
})

var Feed = React.createClass({

  getInitialState: function() {
    return {
      frends_or_news: false
    };
  },

  onCheckRenderClick: function(e) {
    this.setState({frends_or_news: !this.state.frends_or_news});
  },

  render: function() {
    return (
    <div>
      <button
        onClick={this.onCheckRenderClick}
        className='WTF??'>
          all frend
      </button>

      {(this.state.frends_or_news ?
      <AllFrend user_frends={this.props.user_frends} />
      :
      <News feed_items={this.props.feed_items} />)}
    </div>
    )
  }
})
