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
