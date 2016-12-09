var UserPage = React.createClass({
  render: function() {

    return (
      <div className='UserPage'>
        <PersonalInfo user={this.props.user} />
        <Frends user_frends={this.props.user_frends} />
        <FollowForm current_user={this.props.current_user} folowing={this.props.folowing} user={this.props.user} />
        <News feed_items={this.props.feed_items} />
        <MessageForm />
      </div>
    );
  }
});
