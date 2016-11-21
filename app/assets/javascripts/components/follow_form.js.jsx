var FollowForm = React.createClass({

  render: function() {
    return (
      <div className="FollowForm">
        {(this.props.current_user ?
        ""
        :
        <FollowOrUnfollow folowing={this.props.folowing} user={this.props.user} />)}
      </div>
    );
  }
});

var FollowOrUnfollow = React.createClass({

  render: function() {
    return (
      <div className="FollowForm">
        {(this.props.folowing ?
        <h1>Unfollow work in progress</h1>
        :
        <Follow user={this.props.user} />)}
      </div>
    );
  }
});
