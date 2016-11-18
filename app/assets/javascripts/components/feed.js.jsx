var Article = React.createClass({
  propTypes: {
    feed_item: React.PropTypes.shape({
      content: React.PropTypes.string.isRequired,
    })
  },

  render: function() {
    var content = this.props.feed_item.content;

    return (
      <div>
        <p>message id {this.props.feed_item.id} :</p>
        <p>{content}</p>
      </div>
    )
  }
});

var News = React.createClass({
  render: function() {
  FeedItemsLength = this.props.feed_items.length;
  if (FeedItemsLength > 0) {
    FeedItems = this.props.feed_items.map( function(feed_item) {
        return (
          <div key={feed_item.id}>
            <Article feed_item={feed_item} />
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
