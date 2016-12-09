var Unfollow = React.createClass({

  render: function() {
    return (
      <div className="FollowForm">
      <form class="edit_relationship" id={"edit_relationship_"+this.props.user.id} action={"/relationships/"+this.props.user.id} accept-charset="UTF-8" method="post">
        <input name="utf8" type="hidden" value="✓"/>
        <input type="hidden" name="_method" value="delete"/>
        <input type="submit" name="commit" value="Unfollow" class="btn" data-disable-with="Unfollow"/>
      </form>
      </div>
    );
  }
});
