var Follow = React.createClass({

  render: function() {
    return (
      <div className="FollowForm">
        <form class="new_relationship" id="new_relationship" action="/relationships" accept-charset="UTF-8" method="post">
          <input name="utf8" type="hidden" value="✓"/>
          <div><input type="hidden" name="followed_id" id="followed_id" value={this.props.user.id}/></div>
          <input type="submit" name="commit" value="Follow" data-disable-with="Follow"/>
        </form>
      </div>
    );
  }
});
